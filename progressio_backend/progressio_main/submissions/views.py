from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from .models import Submission

# List all submissions
@csrf_exempt
def list_submissions(request):
    if request.method == 'GET':
        submissions = Submission.objects.all()
        data = [{'id': submission.id, 'submission_date': submission.submission_date, 'status': submission.status,
                 'remarks': submission.remarks, 'assignment_id': submission.assignment_id, 'student_id': submission.student_id}
                for submission in submissions]
        return JsonResponse({'submissions': data})

# Create a new submission
@csrf_exempt
def create_submission(request):
    if request.method == 'POST':
        data = request.POST
        submission = Submission.objects.create(submission_date=data['submission_date'], status=data['status'],
                                               remarks=data['remarks'], assignment_id=data['assignment_id'],
                                               student_id=data['student_id'])
        return JsonResponse({'message': 'Submission created successfully'})

# Update a submission
@csrf_exempt
def update_submission(request, submission_id):
    submission = get_object_or_404(Submission, pk=submission_id)
    if request.method == 'PUT':
        data = request.POST
        submission.submission_date = data.get('submission_date', submission.submission_date)
        submission.status = data.get('status', submission.status)
        submission.remarks = data.get('remarks', submission.remarks)
        submission.assignment_id = data.get('assignment_id', submission.assignment_id)
        submission.student_id = data.get('student_id', submission.student_id)
        submission.save()
        return JsonResponse({'message': 'Submission updated successfully'})

# Delete a submission
@csrf_exempt
def delete_submission(request, submission_id):
    submission = get_object_or_404(Submission, pk=submission_id)
    if request.method == 'DELETE':
        submission.delete()
        return JsonResponse({'message': 'Submission deleted successfully'})
