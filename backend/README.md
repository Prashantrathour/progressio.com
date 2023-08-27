 **Progressio.com**



**------------------------- ER DIGRAM--------------------**
 
 
  +------------------+     +------------------+
  |    Student       |     |    Instructor    |
  +------------------+     +------------------+
  | - id (PK)        |     | - id (PK)        |
  | - Name           |     | - Name           |
  | - Student ID     |     | - Gender         |
  | - Gender         |     | - Date of Birth  |
  | - Date of Birth  |     | - Department     |
  | - Major          |     | - Email          |
  | - Email          |     | - Contact Number |
  | - Contact Number |     +------------------+
  +------------------+
          |
          |
          v
  +------------------+
  |     Course       |
  +------------------+
  | - id (PK)        |
  | - Course Code    |
  | - Course Name    |
  | - Department     |
  | - Credits        |
  | - Description    |
  | - Instructor (FK)|
  +------------------+
          |
          |
          v
  +------------------+
  |   Enrollment     |
  +------------------+
  | - id (PK)        |
  | - Student (FK)   |
  | - Course (FK)    |
  +------------------+
          |
          |
          v
  +------------------+
  |   Assignment     |
  +------------------+
  | - id (PK)        |
  | - Title          |
  | - Description    |
  | - Due Date       |
  | - Course (FK)    |
  +------------------+
          |
          |
          v
  +------------------+
  |   Submission     |
  +------------------+
  | - id (PK)        |
  | - Submission Date|
  | - Status         |
  | - Remarks        |
  | - Assignment (FK)|
  | - Student (FK)   |
  +------------------+
          |
          |
          v
  +------------------+
  |   Department     |
  +------------------+
  | - id (PK)        |
  | - Name           |
  | - Courses        |
  | - Instructors    |
  +------------------+
          |
          |
          v
  +------------------+
  |  Announcement    |
  +------------------+
  | - id (PK)        |
  | - Title          |
  | - Description    |
  | - Publish Date   |
  | - Department (FK)|
  | - Course (FK)    |
  +------------------+
