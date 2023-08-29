
from django.views.decorators.csrf import csrf_exempt

import json
from django.http import JsonResponse
from .models import Instructor


def list_instructors(request):
    instructors = Instructor.objects.all()
    instructor_data = [
        {
            'id': instructor.id,
            'name': instructor.name,
            'gender': instructor.gender,
            'date_of_birth': instructor.date_of_birth,
            'department': instructor.department.name,
            'email': instructor.email,
            'contact_number': instructor.contact_number,
        }
        for instructor in instructors
    ]
    return JsonResponse({'instructors': instructor_data})
@csrf_exempt
def create_instructor(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            instructor = Instructor.objects.create(
                name=data['name'],
                gender=data['gender'],
                date_of_birth=data['date_of_birth'],
                department_id=data['department_id'],  # Assuming 'department_id' is provided in the JSON
                email=data['email'],
                contact_number=data['contact_number'],
            )
            return JsonResponse({'message': 'Instructor created successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

@csrf_exempt
def update_instructor(request, instructor_id):
    try:
        instructor = Instructor.objects.get(pk=instructor_id)
        if request.method == 'PUT' or request.method == 'PATCH':
            data = json.loads(request.body)
            instructor.name = data.get('name', instructor.name)
            instructor.gender = data.get('gender', instructor.gender)
            instructor.date_of_birth = data.get('date_of_birth', instructor.date_of_birth)
            instructor.department_id = data.get('department_id', instructor.department_id)
            instructor.email = data.get('email', instructor.email)
            instructor.contact_number = data.get('contact_number', instructor.contact_number)
            instructor.save()
            return JsonResponse({'message': 'Instructor updated successfully'})
    except Instructor.DoesNotExist:
        return JsonResponse({'error': 'Instructor not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

@csrf_exempt
def delete_instructor(request, instructor_id):
    try:
        instructor = Instructor.objects.get(pk=instructor_id)
        if request.method == 'DELETE':
            instructor.delete()
            return JsonResponse({'message': 'Instructor deleted successfully'})
    except Instructor.DoesNotExist:
        return JsonResponse({'error': 'Instructor not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)
