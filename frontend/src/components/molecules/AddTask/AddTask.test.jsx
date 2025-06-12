import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddTask from '.';

describe('AddTask', () => {
  it('should render the AddTask component', () => {
    render(<AddTask />);

    expect(screen.getByText('Adicionar Tarefa')).toBeInTheDocument();

    const iconElement = screen.getByTestId('AddOutlinedIcon');
    expect(iconElement).toBeInTheDocument();
  });

  it('should call onAddTask when clicked', async () => {
    const onAddTaskMock = vi.fn();

    render(<AddTask onAddTask={onAddTaskMock} />);

    const button = screen.getByText('Adicionar Tarefa');
    await userEvent.click(button);

    expect(onAddTaskMock).toHaveBeenCalledTimes(1);
  });
});
