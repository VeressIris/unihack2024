# OlympiAId

**OlympiAId** is an AI-powered platform designed to assist students in preparing for academic olympiads. It enables users to select their academic level, subject, and competition phase (local, national, county) to receive personalized topic recommendations and solutions. Users can also contribute by adding their own solutions.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- **AI-Generated Olympiad Topics and Solutions**: Automatically generates topics and sample problems in computer science, biology, history, and English based on the user’s selection.
- **User-Generated Solutions**: Allows users to add their own solutions to generated topics.
- **User Profile Management**: Handles registration and profile customization with a seamless login experience.
- **Inventory Management**: Backend management of items, stores, and companies, utilizing Express and MongoDB.
- **Dynamic Dropdowns**: Interactive dropdown menu for selecting academic level, subject, and phase, implemented in React with Tailwind CSS.
- **Model Training and Tracking**: MLflow integration for managing and tracking machine learning experiments.
- **Frontend-Backend Communication**: MongoDB for data storage, with Express and C++ for handling data and inventory.

## Tech Stack
- **Frontend**: React with Vite for fast development and HMR.
- **Styling**: Tailwind CSS for responsive and customizable components.
- **Backend**:
  - Express for API management.
  - C++ for high-performance operations in inventory management.
- **AI & Machine Learning**:
  - Hugging Face models for topic generation and solution suggestions.
  - MLflow for tracking experiments and model performance.
- **Database**: MongoDB for data storage.
- **Plugins**:
  - `@vitejs/plugin-react` (Babel-based Fast Refresh for HMR)
  - `@vitejs/plugin-react-swc` (SWC-based Fast Refresh for HMR)

## Installation

### Prerequisites
- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **MongoDB**: [Install MongoDB](https://www.mongodb.com/)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/OlumpiAId.git
   cd OlumpiAId
Frontend Setup:

bash

Copy the code
cd frontend
npm install
npm run dev

Backend Setup:
Navigate to the backend directory.

Install dependencies and start the Express server:
bash

Copy the code
npm install
npm start

Database Setup: Start MongoDB by running:
bash

Copy the code
mongod
MLflow Setup: Follow the MLflow documentation for tracking model experiments.

Run the Application: Open the app in your browser via the provided localhost URL from Vite.

Project Structure (folders):


/public
  └── images
/src
  └── assets
    └── components
        └── home
        └── loading
        └── personalProblems
        └── profile
        └── select
    └── pages



Usage
Profile Management:
Users can create an account and customize their profile.

Olympiad Preparation:
Select academic level, subject (computer science, biology, history, English), and competition phase.
AI generates relevant topics and solutions tailored to the selections.

User-Generated Solutions:
Users can add their own solutions to the generated topics, contributing to a shared knowledge base.

Inventory Management:
Backend features allow for managing items, stores, and companies in the system.

Frontend Navigation:
Access interactive dropdown menus and a responsive interface.

Model Training:
Track and experiment with Hugging Face models using MLflow.

Contributing
Contributions to OlumpiAId are welcome! To contribute:

Fork the repository.

Create a new branch:
bash

Copy the code
git checkout -b feature/YourFeature

Commit your changes:
bash

Copy the code
git commit -m "Add feature"

Push to the branch:
bash

Copy the code
git push origin feature/YourFeature

Open a Pull Request on GitHub.

Contact
For questions or suggestions, please contact Martinescu Iseline or Veress Iris at miriam.iseline@gmail.com, irisveress@gmail.com.
