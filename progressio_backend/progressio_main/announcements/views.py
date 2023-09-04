from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from .models import Announcement
import json
# List all announcements
@csrf_exempt
def list_announcements(request):
    if request.method == 'GET':
        announcements = Announcement.objects.all()
        data = [{'id': announcement.id, 'title': announcement.title, 'description': announcement.description,
                 'publish_date': announcement.publish_date, 'department': announcement.department.name,
                 'course': announcement.course.course_name} for announcement in announcements]
        return JsonResponse({'announcements': data})

# Create a new announcement
@csrf_exempt
def create_announcement(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        announcement = Announcement.objects.create(title=data['title'], description=data['description'],
                                                   publish_date=data['publish_date'], department_id=data['department_id'],
                                                   course_id=data['course_id'])
        return JsonResponse({'message': 'Announcement created successfully'})

# Update an announcement
@csrf_exempt
def update_announcement(request, announcement_id):
    announcement = get_object_or_404(Announcement, pk=announcement_id)
    if request.method == 'PUT':
        data = json.loads(request.body)
        announcement.title = data.get('title', announcement.title)
        announcement.description = data.get('description', announcement.description)
        announcement.publish_date = data.get('publish_date', announcement.publish_date)
        announcement.department_id = data.get('department_id', announcement.department_id)
        announcement.course_id = data.get('course_id', announcement.course_id)
        announcement.save()
        return JsonResponse({'message': 'Announcement updated successfully'})

# Delete an announcement
@csrf_exempt
def delete_announcement(request, announcement_id):
    announcement = get_object_or_404(Announcement, pk=announcement_id)
    if request.method == 'DELETE':
        announcement.delete()
        return JsonResponse({'message': 'Announcement deleted successfully'})
