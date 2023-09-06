# progressio.com 



# Progression - Learning Management System (LMS)

## Description
Progression is a feature-rich Learning Management System (LMS) designed to facilitate online learning. It allows students to enroll in courses, participate in classes, submit assignments, and access course materials. Instructors have the tools to manage courses, create assignments, announcements, and monitor student progress. This README provides an overview of the project, including features, technology stack, setup instructions, and more.

## Features
### For Students
- User authentication (login and signup)
- Course enrollment and unenrollment
- Access to course materials, lectures, and announcements
- Submission of assignments
- Viewing assignment grades and feedback
- Profile management
- Course progress tracking

### For Instructors
- User authentication (login and signup)
- Course creation and management
- Lecture creation and management
- Assignment creation and grading
- Announcement broadcasting
- Student management and progress tracking
- Profile management

## Technology Stack
Progression is built using a modern technology stack:
- **Backend:**
  - Python (3.6+)
  - Django (3.2) - Web framework
  - Django REST framework - API development
  - PostgreSQL (or your preferred database)
  - RESTful API design

- **Frontend:**
  - Angular - Frontend framework
  - Angular CLI - Development tools
  - Tailwind CSS - Styling
  - HTML5, CSS3, JavaScript - Web technologies
  - Responsive design

## Prerequisites
Before you begin, ensure you have the following prerequisites installed:
- Python 3.6+
- Node.js and npm
- Angular CLI (globally installed)
- Django (installed, optionally in a virtual environment)
- Database system (e.g., PostgreSQL, MySQL) configured

## Getting Started
Follow these steps to set up and run the Progression LMS.

### Backend Setup
1. Clone the Progression repository:
   ```bash
   git clone https://github.com/yourusername/progression.git


bash

``cd backend``
Install Python dependencies (consider using a virtual environment):

bash

`pip install -r requirements.txt`
Configure your database settings in backend/settings.py.

Apply migrations and create the database:

bash

`python manage.py migrate`
Run the Django development server:

bash

`python manage.py runserver`
Frontend Setup
Navigate to the frontend directory:

bash

`cd frontend`
Install Angular dependencies:

bash

`npm install`
Start the Angular development server:

bash

`ng serve`
