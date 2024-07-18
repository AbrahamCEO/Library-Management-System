# Library Management System

## Overview

This project is a simple Library Management System with user authentication. The system allows users to sign up, log in, and manage books in a library. The frontend is built with React and Tailwind CSS, while the backend is a Node.js/Express server.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. **Install dependencies for the frontend:**

    ```bash
    cd frontend
    npm install
    ```

3. **Install dependencies for the backend:**

    ```bash
    cd ../backend
    npm install
    ```

### Running the Application

1. **Start the backend server:**

    ```bash
    cd backend
    npm start
    ```

    This will start the backend server on `http://localhost:5555`.

2. **Start the frontend application:**

    ```bash
    cd ../frontend
    npm run dev
    ```

    This will start the frontend application, which is typically served on `http://localhost:3000`.

## Usage

- **Signup Page:** Allows users to create a new account.
- **Login Page:** Allows users to log in using their email and password.
- **Home Page:** Displays a welcome message with the user's name and allows management of books. Users can:
  - **View Books:** See books in a table or card format.
  - **Add New Books:** Use the "Add Book" button to add new books to the library.
  - **Filter Books:** Filter books based on their status (Available or Checked Out).
  - **Logout:** Use the logout button to sign out of the application.

## Screenshots

1. **Signup Page**

   ![Signup Page](https://github.com/user-attachments/assets/f50bcb70-54c1-48d8-ada7-4a689501ee63)

2. **Login Page**

   ![Login Page](https://github.com/user-attachments/assets/7d1fa0d9-9b60-493e-9e6e-48a2f91891c6)

3. **Home Page**

   ![Home Page](https://github.com/user-attachments/assets/11dd9dcc-d042-4c9d-a8cd-705ab5deb96c)

## Technologies Used

- **Frontend:**
  - React
  - Tailwind CSS

- **Backend:**
  - Node.js
  - Express
  - MongoDB (for database)
