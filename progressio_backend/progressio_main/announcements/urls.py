from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_announcements, name='list-announcements'),
    path('create/', views.create_announcement, name='create-announcement'),
    path('update/<int:course_id>/', views.update_announcement, name='update-announcement'),
    path('delete/<int:announcement_id>/', views.delete_announcement, name='delete-announcement'),
    # Add more URL patterns as needed
]
