Knowledge Base App - Backend
This repository contains the backend code for the Knowledge Base App built with Node.js and Express.js. It provides APIs for managing backend functionalities such as sending emails.

Features:
Email API to send transactional emails
Modular and scalable architecture
Environment configuration for development and production

Technologies:
Node.js
Express.js
Nodemailer
dotenv

Getting Started
Prerequisites

Make sure you have the following installed:

Node.js: Download
npm: Comes with Node.js
I
nstallation

Clone the repository:
bash
git clone https://github.com/khushbu1113/knowledge-base-app-backend.git

Navigate into the project directory:

bash
cd knowledge-base-app-backend
Install dependencies:

bash
npm install
Configuration
Create a .env file at the root of the project and add the following:

bash
PORT=5000
EMAIL_API_KEY=your-email-api-key
Running the App

To start the app in development mode:
bash
npm run dev
The app will run on http://localhost:5000.

API Documentation
Send Email
Endpoint: /api/email

Method: POST

Body:

json
Copy code
{
  "email": "recipient@example.com",
  "results": "Here are your test results."
}

Project Structure

knowledge-base-app/   // Root project directory
├── backend/          // Backend folder (Node.js)
│   ├── node_modules/ // Node dependencies for backend
│   ├── src/          // Source folder for backend code
│   │   ├── routes/
│   │   │   └── email.js  // Email sending route
│   │   ├── services/
│   │   │   └── api.js    // API fetch services
│   │   │   └── cache.js  // Caching services
│   │   └── server.js     // Main server file
│   ├── package.json      // Backend dependencies
│   └── README.md         // Backend Readme
├── frontend/         // Frontend folder (React.js)
│   ├── node_modules/ // Node dependencies for frontend
│   ├── public/       // Public assets folder
│   │   └── index.html   // Main HTML file
│   ├── src/          // Source folder for frontend code
│   │   ├── components/  // All reusable components
│   │   │   └── SearchForm.js   // Search input form
│   │   │   └── Results.js      // Display of results
│   │   ├── App.js        // Main React component
│   │   ├── api/          // API calls from frontend
│   │   │   └── api.js    // API call functions to backend
│   ├── package.json      // Frontend dependencies
│   └── README.md         // Frontend Readme
├── README.md         // Project Readme (root)
