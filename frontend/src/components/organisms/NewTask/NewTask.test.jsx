import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import NewTask from '.';
import api from '../../../api';

// Mock da API
vi.mock('../../../api', () => ({
  __esModule: true,
  default: {
    post: vi.fn().mockResolvedValue({ data: { success: true } }),
  },
}));

describe('NewTask', () => {
  const defaultType = 'todo';
  const mockOnCancelTask = vi.fn();
  const mockRefreshTasks = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the NewTask component', () => {
    render(
      <NewTask
        onCancelTask={mockOnCancelTask}
        refreshTasks={mockRefreshTasks}
        type={defaultType}
      />
    );

    expect(screen.getByLabelText(/Descrição/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Responsável/i)).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /Cancelar/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Salvar/i })).toBeInTheDocument();
  });

  it('should call onCancelTask when cancel button is clicked', async () => {
    render(
      <NewTask
        onCancelTask={mockOnCancelTask}
        refreshTasks={mockRefreshTasks}
        type={defaultType}
      />
    );

    const cancelButton = screen.getByRole('button', { name: /Cancelar/i });
    fireEvent.click(cancelButton);

    expect(mockOnCancelTask).toHaveBeenCalledTimes(1);
  });

  it('should successfully submit the form, call API, refresh tasks, and cancel task on success', async () => {
    render(
      <NewTask
        onCancelTask={mockOnCancelTask}
        refreshTasks={mockRefreshTasks}
        type={defaultType}
      />
    );

    const descriptionInput = screen.getByLabelText(/Descrição/i);
    const responsibleInput = screen.getByLabelText(/Responsável/i);
    const saveButton = screen.getByRole('button', { name: /Salvar/i });

    fireEvent.change(descriptionInput, {
      target: { name: 'description', value: 'Novo componente' },
    });
    fireEvent.change(responsibleInput, {
      target: { name: 'responsible', value: 'Dev' },
    });

    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledTimes(1);
      expect(api.post).toHaveBeenCalledWith('/insert-tasks', [
        {
          description: 'Novo componente',
          responsible: 'Dev',
          status: defaultType,
        },
      ]);
      expect(mockRefreshTasks).toHaveBeenCalledTimes(1);
      expect(mockOnCancelTask).toHaveBeenCalledTimes(1);
    });
  });
});
