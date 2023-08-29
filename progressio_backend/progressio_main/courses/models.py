from django.db import models
from instructors.models import Instructor  # Import the Instructor model from your app
# from instructors.models import Department  # Import the Instructor model from your app

class Course(models.Model):
    course_code = models.CharField(max_length=20, unique=True)
    course_name = models.CharField(max_length=100)
    department = models.ForeignKey('departments.Department', on_delete=models.CASCADE)
    credits = models.PositiveIntegerField()
    description = models.TextField()
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE, related_name='courses')

    def __str__(self):
        return self.course_name
