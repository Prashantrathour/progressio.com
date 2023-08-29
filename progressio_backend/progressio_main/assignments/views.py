from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from .models import Assignment

# List all assignments
@csrf_exempt
def list_assignments(request):
    if request.method == 'GET':
        assignments = Assignment.objects.all()
        data = [{'id': assignment.id, 'title': assignment.title, 'description': assignment.description,
                 'due_date': assignment.due_date, 'course_id': assignment.course_id} for assignment in assignments]
        return JsonResponse({'assignments': data})

# Create a new assignment
@csrf_exempt
def create_assignment(request):
    if request.method == 'POST':
        data = request.POST
        assignment = Assignment.objects.create(title=data['title'], description=data['description'],
                                               due_date=data['due_date'], course_id=data['course_id'])
        return JsonResponse({'message': 'Assignment created successfully'})

# Update an assignment
@csrf_exempt
def update_assignment(request, assignment_id):
    assignment = get_object_or_404(Assignment, pk=assignment_id)
    if request.method == 'PUT':
        data = request.POST
        assignment.title = data.get('title', assignment.title)
        assignment.description = data.get('description', assignment.description)
        assignment.due_date = data.get('due_date', assignment.due_date)
        assignment.course_id = data.get('course_id', assignment.course_id)
        assignment.save()
        return JsonResponse({'message': 'Assignment updated successfully'})

# Delete an assignment
@csrf_exempt
def delete_assignment(request, assignment_id):
    assignment = get_object_or_404(Assignment, pk=assignment_id)
    if request.method == 'DELETE':
        assignment.delete()
        return JsonResponse({'message': 'Assignment deleted successfully'})
