import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import '../styles.css';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  dueDate?: string | null;
  createdAt: string;
}

type FilterType = 'all' | 'pending' | 'completed' | 'overdue';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [newDueDate, setNewDueDate] = useState<string>('');
  const [filter, setFilter] = useState<FilterType>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(tasks));
  }, [tasks]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTodo: Task = {
      id: Date.now(),
      title: newTaskTitle.trim(),
      completed: false,
      dueDate: newDueDate || null,
      createdAt: new Date().toISOString(),
    };

    setTasks((prevTasks) => [...prevTasks, newTodo]);
    setNewTaskTitle('');
    setNewDueDate('');
  };

  const toggleTodo = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const isOverdue = (task: Task): boolean => {
    if (!task.dueDate || task.completed) return false;
    const today = new Date().toISOString().split('T')[0];
    return task.dueDate < today;
  };

  const getFilteredTasks = (): Task[] => {
    const today = new Date().toISOString().split('T')[0];

    switch (filter) {
      case 'pending':
        return tasks.filter((task) => !task.completed);
      case 'completed':
        return tasks.filter((task) => task.completed);
      case 'overdue':
        return tasks.filter((task) => !task.completed && task.dueDate && task.dueDate < today);
      default:
        return tasks;
    }
  };

  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const overdueTasks = tasks.filter((task) => isOverdue(task)).length;

  return (
    <div className="todo-app-container">
      <header className="header">
        <h1>Task Management</h1>
      </header>
      <main className="main-content">
        <div className="add-todo-section">
          <form onSubmit={addTodo} className="todo-form">
            <input
              type="text"
              id="todoInput"
              className="todo-input"
              placeholder="Add a new task..."
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
            />
            <input
              type="date"
              id="dueDate"
              className="due-date-input"
              value={newDueDate}
              onChange={(e) => setNewDueDate(e.target.value)}
            />
            <button type="submit" className="add-btn">Add Task</button>
          </form>
        </div>

        <div className="filters-stats-section">
          <div className="filters">
            <button
              id="filterAll"
              className={`filter-btn ${filter === 'all' ? 'active bg-white/40' : 'bg-white/20'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              id="filterPending"
              className={`filter-btn ${filter === 'pending' ? 'active bg-white/40' : 'bg-white/20'}`}
              onClick={() => setFilter('pending')}
            >
              Pending
            </button>
            <button
              id="filterCompleted"
              className={`filter-btn ${filter === 'completed' ? 'active bg-white/40' : 'bg-white/20'}`}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
            <button
              id="filterOverdue"
              className={`filter-btn ${filter === 'overdue' ? 'active bg-white/40' : 'bg-white/20'}`}
              onClick={() => setFilter('overdue')}
            >
              Overdue
            </button>
          </div>
          <div className="todo-stats" id="todoStats">
            Total: {totalTasks} | Pending: {pendingTasks} | Completed: {completedTasks}
            {overdueTasks > 0 && ` | Overdue: ${overdueTasks}`}
          </div>
        </div>

        <TaskList tasks={getFilteredTasks()} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>
    </div>
  );
};

export default App;
