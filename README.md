# Django_React_Demostraci-n 📋

A simple task manager application built with **Django** for the backend and **React** for the frontend. This app allows users to add, edit, and delete tasks with ease.

## Features 🛠️

- Add new tasks with title and description.
- View all tasks.
- Delete tasks.
- User-friendly UI with React.

## Technologies Used 🧰

- **Backend**: Django, Django REST Framework
- **Frontend**: React, Axios for HTTP requests
- **Database**: SQLite (default Django database)

## Setup Guide 📝

Follow these instructions to get the project running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Django_React_Demostraci-n.git
cd Django_React_Demostraci-n

### 2. Set Up the Backend
Navigate to the backend directory and create a virtual environment:

```bash
cd backend
python -m venv env

Activate the virtual environment:
On Windows:
bash
.\env\Scripts\activate

On macOS/Linux:
bash
source env/bin/activate
Install dependencies:

bash
pip install -r requirements.txt
Apply migrations and run the server:

bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

### 3. Set Up the Frontend
Open a new terminal window, navigate to the frontend directory, and install dependencies:

bash
cd ../frontend
npm install
Run the React app:

bash
npm start

### 4. Access the Application
Frontend: Open http://localhost:3000 in your browser.
Backend API: Open http://localhost:8000 in your browser.
API Endpoints 📡
GET /api/tasks/ - Get all tasks
POST /api/tasks/ - Create a new task
PUT /api/tasks/<id>/ - Update a task
DELETE /api/tasks/<id>/ - Delete a task

Usage 🎉
Go to the frontend URL to interact with the Task Manager interface.
Add tasks using the form, view them in the list, and delete or update them as needed.
