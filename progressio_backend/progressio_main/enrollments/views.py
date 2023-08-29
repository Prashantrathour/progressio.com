from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Enrollment  # Import the Enrollment model from your app
from students.models import Student  # Import the Student model from your app
from courses.models import Course  # Import the Course model from your app

@csrf_exempt
def enrollment_create(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            student_id = data.get('student_id')
            course_id = data.get('course_id')

            student = Student.objects.filter(id=student_id).first()
            course = Course.objects.filter(id=course_id).first()

            if not student or not course:
                return JsonResponse({'error': 'Invalid student or course ID'}, status=400)

            Enrollment.objects.create(student=student, course=course)
            return JsonResponse({'message': 'Enrollment created successfully'})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=400)

@csrf_exempt
def enrollment_update(request, enrollment_id):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            student_id = data.get('student_id')
            course_id = data.get('course_id')

            enrollment = Enrollment.objects.filter(id=enrollment_id).first()
            student = Student.objects.filter(id=student_id).first()
            course = Course.objects.filter(id=course_id).first()

            if not enrollment or not student or not course:
                return JsonResponse({'error': 'Enrollment, student, or course not found'}, status=404)

            enrollment.student = student
            enrollment.course = course
            enrollment.save()

            return JsonResponse({'message': 'Enrollment updated successfully'})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=400)

@csrf_exempt
def enrollment_delete(request, enrollment_id):
    if request.method == 'POST':
        enrollment = Enrollment.objects.filter(id=enrollment_id).first()
        if enrollment:
            enrollment.delete()
            return JsonResponse({'message': 'Enrollment deleted successfully'})
        else:
            return JsonResponse({'error': 'Enrollment not found'}, status=404)

    return JsonResponse({'error': 'Invalid request method'}, status=400)

def list_enrollments(request):
    enrollments = Enrollment.objects.all()
    enrollment_data = [{'student_name': enrollment.student.name, 'course_name': enrollment.course.course_name} for enrollment in enrollments]
    return JsonResponse({'enrollments': enrollment_data})
