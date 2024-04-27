# Learning Management System (LMS)

<p align="center">
  <img src="https://socialify.git.ci/Mohid-Anwar/lms/image?language=1&name=1&owner=1&theme=Dark" alt="lms" width="640" height="320" />
</p>

## Description

This project is a Learning Management System (LMS) developed using Node.js, Express.js, and MongoDB. It provides functionalities for managing students, teachers, and classes, catering to the administrative needs of educational institutions.

## Features

- Admin Routes (/admin):
  - GET /: Admin dashboard.
  - GET /students: Get list of students.
  - GET /students/:id: Get details of a specific student.
  - GET /teachers: Get list of teachers.
  - GET /teachers/:id: Get details of a specific teacher.
  - GET /classes: Get list of classes.
  - GET /classes/:id: Get details of a specific class.
  - POST /addstudent: Add a new student.
  - POST /addteacher: Add a new teacher.
  - POST /addclass: Add a new class.
  - PUT /classes/:cid/:tid: Assign a teacher to a class.
  - PUT /assignsttoclass/:cid/:sid: Assign a student to a class.
  - DELETE /delstudent/:id: Delete a student.
  - DELETE /delteachers/:id: Delete a teacher.
  - DELETE /delclass/:id: Delete a class.

## Usage

- Use **Postman** as the frontend, as no frontend is developed.

## 🛠️ Installation Steps:

- Clone the Repository

```bash
git clone https://github.com/Mohid-Anwar/lms.git
cd lms
```

- Install dependencies:

```bash
npm install
```

- Run the Application

```bash
nodemon ./bin/www
```

- Access the application at http://localhost:3000.

## 🍰 Contribution Guidelines:</h2>

Contributions are welcome! Fork the repository and submit a pull request.

## 💻 Built with

Technologies used in the project:

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman
- VS Code
