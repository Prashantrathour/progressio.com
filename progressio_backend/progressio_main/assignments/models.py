from django.db import models
from courses.models import Course  # Import the Course model from your app

class Assignment(models.Model):
    title = models.CharField(max_length=100)
    instructor = models.CharField(max_length=100)
    description = models.TextField()
    due_date = models.DateField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='assignments')
    isSubmitted=models.BooleanField(default=False)
    showSubmissionForm=models.BooleanField(default=False)
    githublink = models.URLField(max_length=200,null=True,blank=True)
    deployelink = models.URLField(max_length=200, blank=True, null=True)
    submitted_at = models.DateTimeField(auto_now_add=True)
    #  isSubmitted: false,
    #   githubLink: '',
    #   deployLink: '',
    #   showSubmissionForm: false
    def __str__(self):
        return self.title
class AssignmentSubmission(models.Model):
    githublink = models.URLField(max_length=200)
    deployelink = models.URLField(max_length=200, blank=True, null=True)
    status = models.CharField(max_length=10, default='red')
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'AssignmentSubmission {self.id}'