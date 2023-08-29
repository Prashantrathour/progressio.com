from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_submissions, name='list_submissions'),
    path('create/', views.create_submission, name='create_submission'),
    path('update/<int:submission_id>/', views.update_submission, name='update_submission'),
    path('delete/<int:submission_id>/', views.delete_submission, name='delete_submission'),
]
