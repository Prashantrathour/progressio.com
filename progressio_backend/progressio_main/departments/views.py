from django.http import JsonResponse,HttpResponse
from django.shortcuts import get_object_or_404
from .models import Department
from courses.models import Course  # Import the Course model
from instructors.models import Instructor  # Import the Instructor model
from django.views.decorators.csrf import csrf_exempt
from django.db import IntegrityError
def department_list(request):
    if request.method == 'GET':
        departments = Department.objects.all()
        department_data = []

        for department in departments:
            # Retrieve the related courses and instructors for each department
            courses = [course.course_name for course in department.courses.all()]
            instructors = [instructor.name for instructor in department.instructors.all()]

            department_data.append({
                'id': department.id,
                'name': department.name,
                'courses': courses,
                'instructors': instructors,
                # Add other department fields here
            })

        return JsonResponse({'departments': department_data})
    if request.method == 'GET':
        departments = Department.objects.all()
        department_data = []

        for department in departments:
            # Retrieve the related courses and instructors for each department
            courses = [course.course_name for course in department.courses.all()]
            instructors = [instructor.name for instructor in department.instructors.all()]

            department_data.append({
                'id': department.id,
                'name': department.name,
                'courses': courses,
                'instructors': instructors,
                # Add other department fields here
            })

        return JsonResponse({'departments': department_data})
@csrf_exempt
def create_department(request):
    if request.method == 'POST':
        try:
            # Extract department data from the request's POST data
            name = request.POST.get('name')
            
            # Create the department
            department = Department(name=name)
            department.save()

            # Associate courses with the department
            course_ids = request.POST.getlist('courses')  # List of course IDs
            for course_id in course_ids:
                try:
                    course = Course.objects.get(id=course_id)
                    department.courses.add(course)
                except Course.DoesNotExist:
                    pass  # Handle the case where the course doesn't exist

            # Associate instructors with the department
            instructor_ids = request.POST.getlist('instructors')  # List of instructor IDs
            for instructor_id in instructor_ids:
                try:
                    instructor = Instructor.objects.get(id=instructor_id)
                    department.instructors.add(instructor)
                except Instructor.DoesNotExist:
                    pass  # Handle the case where the instructor doesn't exist

            return JsonResponse({'message': 'Department created successfully', 'department_id': department.id})
        except IntegrityError:
            return JsonResponse({'error': 'Department with this name already exists'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)  # Return an error response if something goes wrong

    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)
@csrf_exempt
def department_detail(request, pk):
    department = get_object_or_404(Department, pk=pk)
    department_data = {
        'id': department.id,
        'name': department.name,
        # Add other department fields here
    }
    return JsonResponse({'department': department_data})
@csrf_exempt
def update_department(request, pk):
    department = get_object_or_404(Department, pk=pk)
    if request.method == 'POST':
        department_data = request.POST
        department.name = department_data.get('name')
        # Update other department fields here
        department.save()
        return JsonResponse({'message': 'Department updated successfully'})
@csrf_exempt
def delete_department(request, pk):
    department = get_object_or_404(Department, pk=pk)
    if request.method == 'DELETE':
        department.delete()
        return JsonResponse({'message': 'Department deleted successfully'})
    else:
        return HttpResponse('Method not allowed', status=405)