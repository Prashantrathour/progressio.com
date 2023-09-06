from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_assignments, name='list-assignments'),
    path('create/', views.create_assignment, name='create-assignment'),
    path('update/<int:assignment_id>/', views.update_assignment, name='update-assignment'),
    path('delete/<int:assignment_id>/', views.delete_assignment, name='delete-assignment'),
     path('assignment-submissions/',views.assignment_submission_list, name='assignment-submissions')
]
