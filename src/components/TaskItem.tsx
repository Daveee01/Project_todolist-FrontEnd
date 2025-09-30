import React, { ReactNode } from 'react';

interface TaskItemProps {
  id: number;
  title: string;
  completed: boolean;
  dueDate?: string;
  onToggle: (id: number) => void;
  children?: ReactNode;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, title, completed, dueDate, onToggle, children }) => {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <div className="todo-main">
          {/* Tombol untuk menandai task selesai/belum selesai */}
          <button 
            onClick={() => onToggle(id)} 
            className={`toggle-btn ${completed ? 'completed' : ''}`}
          >
            {completed ? '✓' : ''}
          </button>
          
          {/* Teks task dan tanggal deadline */}
          <div className="todo-text">
            <p className={completed ? 'completed' : ''}>
              {title}
            </p>
            {dueDate && (
              <div className="due-date-info">
                <span className="due-date-text">
                  Deadline: {dueDate}
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Tombol untuk menghapus task */}
        {children}
      </div>
    </div>
  );
};

export default TaskItem;
