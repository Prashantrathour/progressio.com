# instructor_login/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('instructor_register', views.register_instructor, name='instructor_register'),
    path('instructor_login', views.login_instructor, name='instructor_login'),
    path('', views.homepage, name='homepage'),
    # Add more URL patterns as needed
]
