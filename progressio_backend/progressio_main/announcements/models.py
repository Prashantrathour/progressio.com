from django.db import models
from departments.models import Department  # Import the Department model from your app
from courses.models import Course  # Import the Course model from your app

class Announcement(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    publish_date = models.DateField()
    department = models.ForeignKey(Department, on_delete=models.CASCADE, null=True, blank=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.title
