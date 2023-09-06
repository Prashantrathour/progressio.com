# from django.db import models
# from students.models import Student  # Import the Student model from your app
# from courses.models import Course  # Import the Course model from your app

# class Enrollment(models.Model):
#     student = models.ForeignKey(Student, on_delete=models.CASCADE)
#     course = models.ForeignKey(Course, on_delete=models.CASCADE)
#     enrollment_time = models.DateTimeField(auto_now_add=True)
#     def __str__(self):
#         return f'{self.student.name} enrolled in {self.course.course_name}'
from django.db import models
from students.models import Student
from courses.models import Course

class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    enrollment_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.student.name} enrolled in {self.course.course_name}'

    @property
    def studentref(self):
        return {
            'student': {
                'id': self.student.id,
                'name': self.student.name,
                'student_id': self.student.student_id,
                # Add other student properties as needed
            },
            'enrolledcourses': [course.name for course in self.student.courses.all()],
        }
