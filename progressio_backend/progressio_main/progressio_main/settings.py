# settings.py

import environ
import os

env = environ.Env()
environ.Env.read_env()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-ns0#_eh0%w4jh2$2lpm2!(%v80+tx)noz*7*%nkjvyc-qw)quy'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

CORS_ALLOW_ALL_ORIGINS = False  # Disable allowing all origins
CORS_ALLOW_CREDENTIALS = True   # Allow credentials (cookies, authentication headers)
CORS_ALLOW_METHODS = [
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
]
CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]

# Define the allowed origins for your application
CORS_ALLOWED_ORIGINS = [
    "http://localhost:4200",  # Add the URL of your Angular app
    "https://progressiodeploye.onrender.com",  # Add other allowed origins as needed
]

# You can also use regular expressions for allowed origins if necessary
# CORS_ALLOWED_ORIGIN_REGEXES = [
#     r"^https://\w+\.domain\.com$",
# ]

ALLOWED_HOSTS = ['*']

AUTH_USER_MODEL = 'instructor_login.Instructor'

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'students',
    'courses',
    'instructors',
    'departments',
    'enrollments',
    'submissions',
    'assignments',
    'announcements',
    'rest_framework',
    'rest_framework.authtoken',
    'user',
    
    'corsheaders',
    'instructor_login'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# ...

# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

# DATABASES = {
#     "default": {
#         "ENGINE": "django.db.backends.mysql",
#         "NAME": "data",
#         "USER": "prashant",
#         "PASSWORD": "Prashant123@",
#         "HOST": "127.0.0.1",
#         "PORT": "3306",
#     }
# }

import dj_database_url
DATABASES = {
   'default': dj_database_url.parse(env("DATA_BASE_URL"))
}

# ...

# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# ...

# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
PASSWORD_HASHERS = [
    'django.contrib.auth.hashers.PBKDF2PasswordHasher',
    # ...
]
