from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_enrollments, name='list-enrollments'),
    path('create/', views.enrollment_create, name='enrollment_create'),
    path('update<int:enrollment_id>/', views.enrollment_update, name='enrollment_update'),
    path('delete/<int:enrollment_id>/', views.enrollment_delete, name='enrollment_delete'),
    # Add more URL patterns as needed
]
