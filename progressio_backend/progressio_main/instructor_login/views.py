from django.contrib.auth import authenticate

from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from .models import Instructor
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.authtoken.models import Token
@csrf_exempt
def register_instructor(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            hashed_password = make_password(data['password'])
            instructor = Instructor.objects.create(
                name=data['name'],
                email=data['email'],
                password=hashed_password,
                gender=data['gender'],
                # Add more fields as needed
            )
            return JsonResponse({'message': 'Instructor registered successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed for registration'}, status=405)


@csrf_exempt
def login_instructor(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data['email']
            password = data['password']

            try:
                instructor = Instructor.objects.get(email=email)
                if check_password(password, instructor.password):
                    token, created = Token.objects.get_or_create(user=instructor)
                    return JsonResponse({'message': 'Instructor logged in successfully', 'token': token.key})
                else:
                    return JsonResponse({'error': 'Invalid password'}, status=401)
            except Instructor.DoesNotExist:
                return JsonResponse({'error': 'Instructor not found'}, status=404)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed for login'}, status=405)