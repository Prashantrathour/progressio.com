# from django.db import models

# Create your models here.
from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    student_id = models.CharField(max_length=20, unique=True)
    gender = models.CharField(max_length=10)
    date_of_birth = models.DateField()
    major = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    contact_number = models.CharField(max_length=15, unique=True)

    def __str__(self):
        return self.name
