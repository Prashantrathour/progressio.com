from django.shortcuts import render
import json
from django.http import JsonResponse
from .models import Course
from django.views.decorators.csrf import csrf_exempt
from instructors.models import Instructor  # Import the Instructor model from your app

# List all courses
def list_courses(request):
    courses = Course.objects.all()
    course_list = [{
        "id": course.id,
        "course_code": course.course_code,
        "course_name": course.course_name,
        "department": course.department.name,  # Assuming your Department model has a 'name' field
        "credits": course.credits,
        "description": course.description,
        "instructor": course.instructor.name,  # Assuming your Instructor model has a 'name' field
    } for course in courses]
    return JsonResponse({'courses': course_list})

# Create a new course
@csrf_exempt
def create_course(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            instructor_id = data.get('instructor_id')  # Assuming 'instructor_id' is provided in the JSON

            instructor = Instructor.objects.get(pk=instructor_id)  # Get the instructor object
            course = Course.objects.create(
                course_code=data['course_code'],
                course_name=data['course_name'],
                department_id=data['department_id'],  # Assuming 'department_id' is provided in the JSON
                credits=data['credits'],
                description=data['description'],
                instructor=instructor,
            )
            return JsonResponse({'message': 'Course created successfully'})
        except Instructor.DoesNotExist:
            return JsonResponse({'error': 'Instructor not found'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
# http://127.0.0.1:8000/course/create/
# Update an existing course
@csrf_exempt
def update_course(request, course_id):
    try:
        course = Course.objects.get(pk=course_id)
        if request.method == 'PUT' or request.method == 'PATCH':
            data = json.loads(request.body)
            instructor_id = data.get('instructor_id')  # Assuming 'instructor_id' is provided in the JSON
            instructor = Instructor.objects.get(pk=instructor_id)  # Get the instructor object
            course.course_code = data.get('course_code', course.course_code)
            course.course_name = data.get('course_name', course.course_name)
            course.department_id = data.get('department_id', course.department_id)
            course.credits = data.get('credits', course.credits)
            course.description = data.get('description', course.description)
            course.instructor = instructor
            course.save()
            return JsonResponse({'message': 'Course updated successfully'})
    except Course.DoesNotExist:
        return JsonResponse({'error': 'Course not found'}, status=404)
    except Instructor.DoesNotExist:
        return JsonResponse({'error': 'Instructor not found'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

# Delete a course
@csrf_exempt
def delete_course(request, course_id):
    try:
        course = Course.objects.get(pk=course_id)
        if request.method == 'DELETE':
            course.delete()
            return JsonResponse({'message': 'Course deleted successfully'})
    except Course.DoesNotExist:
        return JsonResponse({'error': 'Course not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)
