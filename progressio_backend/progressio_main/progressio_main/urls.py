from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('students/', include('students.urls')),
    path('instructor/', include('instructors.urls')),
    path('course/', include('courses.urls')),
    path('department/', include('departments.urls')),
    path('enrollments/', include('enrollments.urls')),
    path('submissions/', include('submissions.urls')),
    path('assignments/', include('assignments.urls')),
    path('announcement/', include('announcements.urls')),
]
 