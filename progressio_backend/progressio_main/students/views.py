from django.http import JsonResponse
from .models import Student
from django.views.decorators.csrf import csrf_exempt
import json
def student_view(request):
    students = Student.objects.all()
    student_data = [{
                     'name':student.name,
                     'id':student.id,
                     'student_id':student.student_id,
                     'gender':student.gender,
                     'date_of_birth':student.date_of_birth,
                     'major':student.major,
                     'email':student.email,
                     'contact_number':student.contact_number,
                     } for student in students]
    return JsonResponse({'students': student_data})
# http://127.0.0.1:8000/students
@csrf_exempt
def create_student(request):
    if request.method == 'POST':
        try:
            # Parse the JSON data from the request body
            data = json.loads(request.body)
            
            # Create a new student record
            student = Student.objects.create(
                name=data['name'],
                student_id=data['student_id'],
                gender=data['gender'],
                date_of_birth=data['date_of_birth'],
                major=data['major'],
                email=data['email'],
                contact_number=data['contact_number']
            )

            # Return a JSON response indicating success
            return JsonResponse({'message': 'Student created successfully'})
        except Exception as e:
            # Return a JSON response indicating an error
            return JsonResponse({'error': str(e)}, status=400)

# http://127.0.0.1:8000/students/create_student/
@csrf_exempt
def update_student(request, student_id):
    try:
        student = Student.objects.get(pk=student_id)
        if request.method == 'PUT' or request.method == 'PATCH':
            data = json.loads(request.body)
            student.name = data.get('name', student.name)
            student.student_id = data.get('student_id', student.student_id)
            student.gender = data.get('gender', student.gender)
            student.date_of_birth = data.get('date_of_birth', student.date_of_birth)
            student.major = data.get('major', student.major)
            student.email = data.get('email', student.email)
            student.contact_number = data.get('contact_number', student.contact_number)
            student.save()
            return JsonResponse({'message': 'Student updated successfully'})
    except Student.DoesNotExist:
        return JsonResponse({'error': 'Student not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)
# http://127.0.0.1:8000/students/update/1/   
@csrf_exempt
def delete_student(request, student_id):
    try:
        student = Student.objects.get(pk=student_id)
        if request.method == 'DELETE':
            student.delete()
            return JsonResponse({'message': 'Student deleted successfully'})
    except Student.DoesNotExist:
        return JsonResponse({'error': 'Student not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)    
# http://127.0.0.1:8000/students/delete/1/        