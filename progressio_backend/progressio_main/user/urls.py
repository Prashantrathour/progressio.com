# user/urls.py
from django.urls import path
from .views import UserRegistrationView
from .views import UserLoginView

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-register'),
     path('login/', UserLoginView.as_view(), name='user-login')
    # Add more URL patterns for login, profile, etc.
]
