from django.urls import path
from . import views

urlpatterns = [
    path('', views.department_list, name='department-list'),
    path('<int:pk>/', views.department_detail, name='department-detail'),
    path('create/', views.create_department, name='create-department'),
    path('update/<int:pk>/', views.update_department, name='update-department'),
    path('delete/<int:pk>/', views.delete_department, name='delete-department'),
]
