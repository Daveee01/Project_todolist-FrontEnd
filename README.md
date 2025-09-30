Project Todolist - Frontend
This is the frontend for a simple and modern to-do list application built with React, TypeScript, and Vite.

Table of Contents
Features

Technologies Used

Getting Started

Prerequisites

Installation

Available Scripts

Project Structure

Features
Add Tasks: Quickly add new tasks to your to-do list.

View Tasks: See a clear list of all your pending tasks.

Toggle Completion: Mark tasks as complete or incomplete.

Delete Tasks: Remove tasks you no longer need.

Technologies Used
React: A JavaScript library for building user interfaces.

TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.

Vite: A modern frontend build tool that provides a faster and leaner development experience.

CSS: For styling the application.

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You need to have Node.js and npm (or yarn) installed on your machine.

Installation
Clone the repository:

git clone [https://github.com/your-username/project_todolist-frontend.git](https://github.com/your-username/project_todolist-frontend.git)
cd project_todolist-frontend

Install NPM packages:

npm install

Available Scripts
In the project directory, you can run:

npm run dev
Runs the app in development mode. Open http://localhost:5173 (or the port specified in your terminal) to view it in the browser. The page will reload if you make edits.

npm run build
Builds the app for production to the dist folder. It correctly bundles React in production mode and optimizes the build for the best performance.

npm run lint
Runs the linter to check for code quality and style issues across the project.

npm run preview
Serves the production build from the dist folder locally to preview the final application.

Project Structure
project_todolist-frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── TaskItem.tsx
│   │   └── TaskList.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── tsconfig.json
