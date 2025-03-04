# Expense Tracker - MERN Stack

A fully-featured **Expense Tracker** WebApp built with the **MERN** stack (MongoDB, Express, React, Node.js). This app allows users to track their daily expenses efficiently and view summaries of their spending.

---

## Features
- **Add, edit, and delete expenses**.
- **View expenses by category**.
- **Track your total spending**.

---

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via MongoDB Atlas)

---

## Installation

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/ihtasham42/Expense-Tracker-Mern.git
bash```

2. Install Dependencies
After cloning the repository, navigate to the project folder and install dependencies for both the frontend and backend.

Backend:

Navigate to the backend folder:
bash
Copy
cd Expense-Tracker-Mern
cd backend
Install backend dependencies:
bash
Copy
npm install
Frontend:

Navigate to the frontend folder:
bash
Copy
cd ../frontend
Install frontend dependencies:
bash
Copy
npm install

3. Configure Environment Variables
Create a .env file in the backend folder and add your MongoDB URI.

To acquire your MONGO_URI, create a cluster for free at MongoDB Atlas.

plaintext
Copy
MONGO_URI=<YOUR_MONGO_URI>
4. Run the Server
Start the Backend: In the backend folder, run the server with the following command:

bash
Copy
npm run server
Start the Frontend: In a new terminal window, navigate to the frontend folder and start the React development server:

bash
Copy
cd Expense-Tracker-Mern
cd frontend
npm start
This will run the frontend on http://localhost:3000 and the backend API on http://localhost:5000.

Usage
Once the server is up and running, you can:

Add expenses with details like amount, category, and date.
View a list of all expenses.
Edit or delete existing expenses.
View an overview of your spending by category.
Deployment
You can deploy this app using platforms like Netlify for the frontend and Heroku or Vercel for the backend.


This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
MongoDB Atlas for the cloud database.
React.js for the frontend framework.
Express.js and Node.js for the backend.
markdown

Let me know if you need any further changes or have any specific requests!
