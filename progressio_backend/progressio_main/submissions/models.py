from django.db import models
from assignments.models import Assignment  # Import the Assignment model from your app
from students.models import Student  # Import the Student model from your app

class Submission(models.Model):
    SUBMISSION_STATUS_CHOICES = [
        ('Submitted', 'Submitted'),
        ('Late', 'Late'),
        ('Graded', 'Graded'),
    ]

    submission_date = models.DateField()
    status = models.CharField(max_length=20, choices=SUBMISSION_STATUS_CHOICES)
    remarks = models.TextField(blank=True)
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.student.name} - {self.assignment.title}'
