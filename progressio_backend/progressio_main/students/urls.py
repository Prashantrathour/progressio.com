from django.urls import path
from . import views

urlpatterns = [
    path('', views.student_view, name='student_view'),
    path('create_student/', views.create_student, name='create_student'),
    path('update/<int:student_id>/', views.update_student, name='update-student'),
    path('delete/<int:student_id>/', views.delete_student, name='delete-student'),
]
