import React, { ReactNode } from 'react';

interface TaskItemProps {
  id: number;
  title: string;
  completed: boolean;
  dueDate?: string | null;
  onToggle: (id: number) => void;
  children?: ReactNode;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, title, completed, dueDate, onToggle, children }) => {
  const formatDate = (dateString: string | null | undefined): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getDaysUntilDue = (dueDateString: string | null | undefined): number | null => {
    if (!dueDateString) return null;
    const today = new Date();
    const dueDate = new Date(dueDateString);
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const isOverdue = (taskDueDate?: string | null, taskCompleted?: boolean): boolean => {
    if (!taskDueDate || taskCompleted) return false;
    const today = new Date().toISOString().split('T')[0];
    return taskDueDate < today;
  };

  const getDueDateStatus = (taskDueDate?: string | null, taskCompleted?: boolean) => {
    if (!taskDueDate) return { text: '', class: '', icon: '' };

    const daysUntil = getDaysUntilDue(taskDueDate);
    const overdue = isOverdue(taskDueDate, taskCompleted);

    if (overdue) {
      return {
        text: `Overdue by ${Math.abs(daysUntil || 0)} day${Math.abs(daysUntil || 0) !== 1 ? 's' : ''}`,
        class: 'overdue',
        icon: 'fas fa-exclamation-triangle',
      };
    } else if (daysUntil === 0) {
      return {
        text: 'Due today!',
        class: 'due-today',
        icon: 'fas fa-clock',
      };
    } else if (daysUntil === 1) {
      return {
        text: 'Due tomorrow',
        class: 'due-tomorrow',
        icon: 'fas fa-clock',
      };
    } else if (daysUntil && daysUntil <= 3) {
      return {
        text: `Due in ${daysUntil} days`,
        class: 'due-soon',
        icon: 'fas fa-calendar',
      };
    } else {
      return {
        text: taskDueDate ? `Due on ${formatDate(taskDueDate)}` : '',
        class: 'due-later',
        icon: 'fas fa-calendar',
      };
    }
  };

  const dueDateStatus = getDueDateStatus(dueDate, completed);

  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <div className="todo-main">
          <button onClick={() => onToggle(id)} className={`toggle-btn ${completed ? 'completed' : ''}`}>
            {completed ? <i className="fas fa-check icon-small"></i> : ''}
          </button>
          <div className="todo-text">
            <p className={completed ? 'completed' : ''}>
              {title}
            </p>
            {dueDate && (
              <div className="due-date-info">
                <i className={`icon-small ${dueDateStatus.icon}`}></i>
                <span className={dueDateStatus.class}>
                  {dueDateStatus.text}
                </span>
                <span className="due-date-text">
                  ({formatDate(dueDate)})
                </span>
              </div>
            )}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default TaskItem;
