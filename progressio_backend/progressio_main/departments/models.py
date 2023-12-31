from django.db import models

# Create your models here.
class Department(models.Model):
    
    name = models.CharField(max_length=100, unique=True)
    courses = models.ManyToManyField('courses.Course', related_name='departments',blank=True,null=True)
    instructors = models.ManyToManyField('instructors.Instructor', related_name='departments',blank=True,null=True)

    def __str__(self):
        return self.name
