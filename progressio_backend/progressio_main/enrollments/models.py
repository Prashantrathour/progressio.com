from django.db import models
from students.models import Student  # Import the Student model from your app
from courses.models import Course  # Import the Course model from your app

class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.student.name} enrolled in {self.course.course_name}'
