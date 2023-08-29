from django.shortcuts import render
import json
from django.http import JsonResponse
from .models import Course
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
def list_courses(request):
    course=Course.objects.all()
    course_list=[{
        "course_code":item.course_code,
        "course_name":item.course_name,
        "department":item.department,
        "credits":item.credits,
        "description":item.description,
        "instructor":item.instructor,
    } for item in course]
    return JsonResponse({'courses':course_list})
@csrf_exempt
def create_course(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            Course = Course.objects.create(
                name=data['name'],
                gender=data['gender'],
                date_of_birth=data['date_of_birth'],
                department_id=data['department_id'],  # Assuming 'department_id' is provided in the JSON
                email=data['email'],
                contact_number=data['contact_number'],
            )
            return JsonResponse({'message': 'Course created successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
@csrf_exempt
def update_course(request, course_id):
    try:
        course = Course.objects.get(pk=course_id)
        if request.method == 'PUT' or request.method == 'PATCH':
            data = json.loads(request.body)
            course.name = data.get('name', course.name)
            course.gender = data.get('gender', course.gender)
            course.date_of_birth = data.get('date_of_birth', course.date_of_birth)
            course.department_id = data.get('department_id', course.department_id)
            course.email = data.get('email', course.email)
            course.contact_number = data.get('contact_number', course.contact_number)
            course.save()
            return JsonResponse({'message': 'course updated successfully'})
    except course.DoesNotExist:
        return JsonResponse({'error': 'course not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

@csrf_exempt
def delete_course(request, course_id):
    try:
        course = Course.objects.get(pk=course_id)
        if request.method == 'DELETE':
            course.delete()
            return JsonResponse({'message': 'course deleted successfully'})
    except course.DoesNotExist:
        return JsonResponse({'error': 'course not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)
