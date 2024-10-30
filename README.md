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

2. Set Up the Backend
Navigate to the backend directory and create a virtual environment:

bash
Copy code
cd backend
python -m venv env
Activate the virtual environment:

On Windows:
bash
Copy code
.\env\Scripts\activate
On macOS/Linux:
bash
Copy code
source env/bin/activate
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Apply migrations and run the server:

bash
Copy code
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
3. Set Up the Frontend
Open a new terminal window, navigate to the frontend directory, and install dependencies:

bash
Copy code
cd ../frontend
npm install
Run the React app:

bash
Copy code
npm start
4. Access the Application
Frontend: Open http://localhost:3000 in your browser.
Backend API: Open http://localhost:8000 in your browser.
API Endpoints 📡
GET /api/tasks/ - Get all tasks
POST /api/tasks/ - Create a new task
PUT /api/tasks/<id>/ - Update a task
DELETE /api/tasks/<id>/ - Delete a task
Screenshots 🖼️
Here’s a preview of the app:

<!-- Add a screenshot path if you have one -->

Usage 🎉
Go to the frontend URL to interact with the Task Manager interface.
Add tasks using the form, view them in the list, and delete or update them as needed.
Contributing 🤝
Feel free to fork this project and make your own improvements. Submit a pull request if you’d like to contribute!

License 📜
This project is open-source and available under the MIT License.
