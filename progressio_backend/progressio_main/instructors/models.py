from django.db import models
from departments.models import Department 
class Instructor(models.Model):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    ]

    name = models.CharField(max_length=250)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    date_of_birth = models.DateField()
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    email = models.EmailField(unique=True)
    contact_number = models.CharField(max_length=15, unique=True)

    def __str__(self):
        return self.name
