import React, { useState } from 'react';
import TaskList from './components/TaskList';
import '../styles.css';

// Interface sederhana untuk task
interface Task {
  id: number;
  title: string;
  completed: boolean;
  dueDate?: string;
}

const App: React.FC = () => {
  // State untuk menyimpan data tasks dan input form
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [filter, setFilter] = useState('all');

  // Fungsi untuk menambah task baru
  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const task: Task = {
      id: Date.now(),
      title: newTask.trim(),
      completed: false,
      dueDate: dueDate || undefined,
    };

    setTasks([...tasks, task]);
    setNewTask('');
    setDueDate('');
  };

  // Fungsi untuk mengubah status completed task
  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Fungsi untuk menghapus task
  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Fungsi untuk memfilter tasks berdasarkan filter yang dipilih
  const getFilteredTasks = () => {
    switch (filter) {
      case 'pending':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  // Menghitung jumlah tasks untuk statistik
  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter(task => !task.completed).length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="todo-app-container">
      <header className="header">
        <h1>Todo List - Pang Kase Inga</h1>
      </header>
      
      <main className="main-content">
        {/* Form untuk menambah task baru */}
        <div className="add-todo-section">
          <form onSubmit={addTask} className="todo-form">
            <input
              type="text"
              className="todo-input"
              placeholder="Tambah task baru..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <input
              type="date"
              className="due-date-input"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            <button type="submit" className="add-btn">Tambah Task</button>
          </form>
        </div>

        {/* Tombol filter untuk memfilter tasks */}
        <div className="filters-stats-section">
          <div className="filters">
            <button
              className={`filter-btn ${filter === 'all' ? 'active bg-white/40' : 'bg-white/20'}`}
              onClick={() => setFilter('all')}
            >
              Semua
            </button>
            <button
              className={`filter-btn ${filter === 'pending' ? 'active bg-white/40' : 'bg-white/20'}`}
              onClick={() => setFilter('pending')}
            >
              Belum Selesai
            </button>
            <button
              className={`filter-btn ${filter === 'completed' ? 'active bg-white/40' : 'bg-white/20'}`}
              onClick={() => setFilter('completed')}
            >
              Selesai
            </button>
          </div>
          
          {/* Statistik jumlah tasks */}
          <div className="todo-stats">
            Total: {totalTasks} | Belum Selesai: {pendingTasks} | Selesai: {completedTasks}
          </div>
        </div>

        {/* Daftar tasks yang ditampilkan */}
        <TaskList 
          tasks={getFilteredTasks()} 
          onToggle={toggleTask} 
          onDelete={deleteTask} 
        />
      </main>
      
      <div className="site-corner-note">Front-End E • Group ela ais</div>
    </div>
  );
};

export default App;
