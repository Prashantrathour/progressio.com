from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_courses, name='list-courses'),
    path('create/', views.create_course, name='create-course'),
    path('update<int:course_id>/', views.update_course, name='update-course'),
    path('delete<int:course_id>/', views.delete_course, name='delete-course'),
    # Add more URL patterns as needed
]
