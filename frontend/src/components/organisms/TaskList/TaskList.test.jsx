import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import TaskList from '.';

vi.mock('../../molecules/ListHeader', () => {
  return {
    default: vi.fn(({ title, count }) => (
      <div data-testid="mock-list-header">
        <h4>
          {title} {count}
        </h4>
      </div>
    )),
  };
});

vi.mock('../TaskCard', () => {
  return {
    default: vi.fn(({ description, responsible }) => (
      <div data-testid="mock-task-card">
        <h4>{description}</h4>
        <span>{responsible}</span>
      </div>
    )),
  };
});

vi.mock('../../molecules/AddTask', () => {
  return {
    default: vi.fn(({ variant, onAddTask }) => (
      <button data-testid="mock-add-task" onClick={onAddTask}>
        Adicionar Tarefa {variant}
      </button>
    )),
  };
});

vi.mock('../NewTask', () => {
  return {
    default: vi.fn(({ onCancelTask, refreshTasks, type }) => (
      <div data-testid="mock-new-task">
        <p>New Task {type}</p>
        <button
          onClick={onCancelTask}
          data-testid="mock-new-task-cancel-button"
        >
          Mock New Task Cancel
        </button>
        <button
          onClick={refreshTasks}
          data-testid="mock-new-task-save-and-refresh-button"
        >
          Mock New Task Save & Refresh
        </button>
      </div>
    )),
  };
});

describe('TaskList', () => {
  const mockTasks = [
    {
      id: '1',
      description: 'Task 1',
      responsible: 'User A',
      computer: 'PC1',
      createdAt: '2023-01-01T10:00:00Z',
    },
    {
      id: '2',
      description: 'Task 2',
      responsible: 'User B',
      computer: 'PC2',
      createdAt: '2023-01-02T11:00:00Z',
    },
  ];
  const defaultType = 'todo';
  const defaultTitle = 'To Do';

  const mockRefreshTasks = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the TaskList component with tasks', () => {
    render(
      <TaskList
        type={defaultType}
        title={defaultTitle}
        tasks={mockTasks}
        refreshTasks={mockRefreshTasks}
      />
    );

    expect(screen.getByTestId('mock-list-header')).toBeInTheDocument();
    expect(
      screen.getByText(`${defaultTitle} ${mockTasks.length}`)
    ).toBeInTheDocument();

    expect(screen.getByTestId('mock-add-task')).toBeInTheDocument();

    expect(screen.getAllByTestId('mock-task-card')).toHaveLength(
      mockTasks.length
    );
  });
});
