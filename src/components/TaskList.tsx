import React from 'react';
import TaskItem from './TaskItem';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  dueDate?: string;
}

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <div className="empty-state">
          <p>Tidak ada task untuk ditampilkan.</p>
        </div>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
            dueDate={task.dueDate}
            onToggle={onToggle}
          >
            <button 
              onClick={() => onDelete(task.id)} 
              className="delete-btn"
            >
              🗑️
            </button>
          </TaskItem>
        ))
      )}
    </div>
  );
};

export default TaskList;
