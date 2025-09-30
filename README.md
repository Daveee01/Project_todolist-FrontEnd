# 📝 Simple Todo List App

A clean and simple todo list application built with React, TypeScript, and Vite. Perfect for students learning React basics with a beautiful gradient UI and local storage.

![Todo List App](https://img.shields.io/badge/React-19.1.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF)

## ✨ Features

- **📋 Add Tasks**: Simple form to add new tasks
- **📅 Due Dates**: Optional due date for each task
- **✅ Complete Tasks**: Click to mark tasks as done
- **🗑️ Delete Tasks**: Remove tasks you don't need
- **🔍 Filter Tasks**: View All, Pending, or Completed tasks
- **📊 Task Count**: See how many tasks you have
- **🎨 Beautiful UI**: Modern gradient design
- **🔄 Fresh Start**: Tasks reset when you refresh - perfect for demos!

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Project_todolist-FrontEnd
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── TaskItem.tsx      # Individual task component with due date logic
│   └── TaskList.tsx      # Task list container with empty state handling
├── App.tsx               # Main application component with state management
├── App.css               # Application-specific styles
├── main.tsx              # Application entry point
└── index.css             # Global styles
```

## 🎯 How It Works

### App Component (Main)
- Uses `useState` to manage tasks and form inputs
- Simple functions: `addTask`, `toggleTask`, `deleteTask`
- Easy filtering: All, Pending, Completed
- No localStorage - perfect for clean demos!

### TaskItem Component
- Shows each task with a checkbox and delete button
- Simple due date display (just shows the date)
- Clean and easy to understand

### TaskList Component
- Displays all tasks or filtered tasks
- Shows "No tasks" message when empty

## 🎨 Design Features

- **Beautiful Gradient**: Blue gradient background
- **Glass Effect**: Semi-transparent cards
- **Simple Icons**: Checkmark (✓) and trash (🗑️) emojis
- **Clean Typography**: Easy to read fonts
- **Responsive**: Works on phone and computer

## 💾 How Data Works

Tasks are stored in memory only. When you refresh the page, tasks will reset to empty - perfect for clean demonstrations!

## 🛠️ Commands to Run

- `npm run dev` - Start the app (opens in browser)
- `npm run build` - Make the app ready for internet
- `npm run preview` - Test the built app

## 🚀 How to Present to Your Lecturer

1. **Show the running app** - `npm run dev`
2. **Explain the features**:
   - Add tasks with due dates
   - Mark tasks as complete
   - Delete tasks
   - Filter tasks
   - Refresh to start fresh (perfect for demos!)
3. **Show the code structure**:
   - App.tsx (main logic)
   - TaskItem.tsx (individual task)
   - TaskList.tsx (list of tasks)
4. **Explain React concepts**:
   - useState for managing data
   - Props for passing data between components
   - Simple state management without persistence

