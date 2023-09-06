
from .models import AssignmentSubmission
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from .models import Assignment
import json
from datetime import datetime
# List all assignments
@csrf_exempt
def list_assignments(request):
    if request.method == 'GET':
        assignments = Assignment.objects.all()
        data = [{'id': assignment.id,'instructor': assignment.instructor, 'title': assignment.title, 'description': assignment.description,
                 'due_date': assignment.due_date, 'course': assignment.course.course_name,'course_id':assignment.course_id,'    submitted_at':assignment.submitted_at,'submitted_at':assignment.submitted_at,'isSubmitted':assignment.isSubmitted} for assignment in assignments]
        return JsonResponse({'assignments': data})

# Create a new assignment
@csrf_exempt
def create_assignment(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        assignment = Assignment.objects.create(instructor=data['instructor'],title=data['title'], description=data['description'],due_date=data['due_date'], course_id=data['course_id'],isSubmitted=data['isSubmitted'],showSubmissionForm=data['showSubmissionForm'],githublink=data['githublink'],deployelink=data['deployelink'])
        return JsonResponse({'message': 'Assignment created successfully'})

# Update an assignment
@csrf_exempt
def update_assignment(request, assignment_id):
    assignment = get_object_or_404(Assignment, pk=assignment_id)
    if request.method == 'PUT':
        data = json.loads(request.body)
        assignment.title = data.get('title', assignment.title)
        assignment.description = data.get('description', assignment.description)
        assignment.due_date = data.get('due_date', assignment.due_date)
        assignment.course_id = data.get('course_id', assignment.course_id)
        assignment.showSubmissionForm = data.get('showSubmissionForm', assignment.showSubmissionForm)
        assignment.deployelink = data.get('deployelink', assignment.deployelink)
        assignment.githublink = data.get('githublink', assignment.githublink)
        assignment.isSubmitted = data.get('isSubmitted', assignment.isSubmitted)
        assignment.submitted_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        assignment.save()
        return JsonResponse({'message': 'Assignment updated successfully'})

# Delete an assignment
@csrf_exempt
def delete_assignment(request, assignment_id):
    assignment = get_object_or_404(Assignment, pk=assignment_id)
    if request.method == 'DELETE':
        assignment.delete()
        return JsonResponse({'message': 'Assignment deleted successfully'})

@csrf_exempt
def assignment_submission_list(request):
    if request.method == 'GET':
        submissions = AssignmentSubmission.objects.all()
        submission_data = [{'id': submission.id, 'githublink': submission.githublink,'submitted_at':submission.submitted_at, 'deployelink': submission.deployelink, 'status': submission.status} for submission in submissions]
        return JsonResponse({'submissions': submission_data}, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        githublink = data.get('githublink')
        deployelink = data.get('deployelink')
        status = 'green' if deployelink else 'red'
        submission = AssignmentSubmission.objects.create(githublink=githublink, deployelink=deployelink, status=status)
        return JsonResponse({'id': submission.id, 'githublink': submission.githublink, 'deployelink': submission.deployelink, 'status': submission.status}, status=201)
