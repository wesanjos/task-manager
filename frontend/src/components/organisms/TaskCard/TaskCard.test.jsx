import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import TaskCard from '.';

vi.mock('../../molecules/TaskHeader', () => {
  return {
    default: vi.fn(({ description }) => (
      <div data-testid="mock-task-header">
        <h4>{description}</h4>
      </div>
    )),
  };
});

vi.mock('../../molecules/TaskInfoItem', () => {
  return {
    default: vi.fn(({ icon, text, className }) => (
      <div data-testid={`mock-task-info-item-${text}`}>
        {icon}
        <span>{text}</span>
        {className && (
          <span data-testid="mock-class-indicator">{className}</span>
        )}
      </div>
    )),
  };
});

describe('TaskCard', () => {
  const mockTask = {
    description: 'Criar Login',
    responsible: 'wesley',
    computer: 'macbook',
    createdAt: '2023-10-26T10:00:00Z',
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.setSystemTime(new Date(mockTask.createdAt));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render the TaskCard component with the correct data', () => {
    render(<TaskCard {...mockTask} />);

    expect(screen.getByText('Criar Login')).toBeInTheDocument();
    expect(screen.getByText('wesley')).toBeInTheDocument();
    expect(screen.getByText('macbook')).toBeInTheDocument();
    expect(screen.getByText('26/10/2023, 07:00:00')).toBeInTheDocument();
  });
});
