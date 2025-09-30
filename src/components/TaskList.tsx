import React from 'react';
import TaskItem from './TaskItem';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  dueDate?: string | null;
}

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  emptyStateMessage?: string;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete, emptyStateMessage = "No tasks to display." }) => {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <div className="empty-state" id="emptyState">
          <p>{emptyStateMessage}</p>
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
            <button onClick={() => onDelete(task.id)} className="delete-btn" title="Delete todo">
              <i className="fas fa-trash icon-small"></i>
            </button>
          </TaskItem>
        ))
      )}
    </div>
  );
};

export default TaskList;
