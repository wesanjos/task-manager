import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import TaskBoardGrid from '.';
import userEvent from '@testing-library/user-event';

vi.mock('../../organisms/TaskList', () => {
  const TaskListMock = vi.fn(({ type, title, tasks, refreshTasks }) => (
    <div data-testid={`task-list-${type}`}>
      <h4>{title} Mocked</h4>
      <p>Count: {tasks ? tasks.length : 0}</p>
      <button onClick={refreshTasks} data-testid={`refresh-button-${type}`}>
        Refresh {title}
      </button>
    </div>
  ));

  return {
    default: TaskListMock,
  };
});

describe('TaskBoardGrid', () => {
  const mockRefreshTasks = vi.fn();
  const mockTasksByStatus = {
    todo: [{ id: '1', description: 'Task 1 Todo', responsible: 'Bruno' }],
    doing: [{ id: '2', description: 'Task 2 Doing', responsible: 'Maria' }],
    done: [{ id: '3', description: 'Task 3 Done', responsible: 'Pedro' }],
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the TaskBoardGrid component with tasks', () => {
    render(
      <TaskBoardGrid
        tasksByStatus={mockTasksByStatus}
        refreshTasks={mockRefreshTasks}
      />
    );

    expect(screen.getByTestId('task-list-todo')).toBeInTheDocument();
    expect(screen.getByTestId('task-list-doing')).toBeInTheDocument();
    expect(screen.getByTestId('task-list-done')).toBeInTheDocument();

    expect(screen.getByText('To Do Mocked')).toBeInTheDocument();
    expect(screen.getByText('Doing Mocked')).toBeInTheDocument();
    expect(screen.getByText('Done Mocked')).toBeInTheDocument();
  });

  it('should call refreshTasks when refresh button is clicked', async () => {
    render(
      <TaskBoardGrid
        tasksByStatus={mockTasksByStatus}
        refreshTasks={mockRefreshTasks}
      />
    );

    const refreshButtonTodo = screen.getByTestId('refresh-button-todo');
    const refreshButtonDoing = screen.getByTestId('refresh-button-doing');
    const refreshButtonDone = screen.getByTestId('refresh-button-done');

    await userEvent.click(refreshButtonTodo);
    expect(mockRefreshTasks).toHaveBeenCalledTimes(1);

    await userEvent.click(refreshButtonDoing);
    expect(mockRefreshTasks).toHaveBeenCalledTimes(2);

    await userEvent.click(refreshButtonDone);
    expect(mockRefreshTasks).toHaveBeenCalledTimes(3);
  });
});
