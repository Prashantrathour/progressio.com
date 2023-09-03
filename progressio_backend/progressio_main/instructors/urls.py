from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_instructors, name='list-instructors'),
    path('create/', views.create_instructor, name='create-instructor'),
    path('delete<int:instructor_id>/', views.update_instructor, name='update-instructor'),
    path('update/<int:instructor_id>/', views.delete_instructor, name='delete-instructor'),
    path('detail/<int:instructor_id>/', views.instructor_details, name='instructor-details')
    # Add more URL patterns as needed
]
