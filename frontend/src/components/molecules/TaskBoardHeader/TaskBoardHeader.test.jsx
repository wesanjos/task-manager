import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import TaskBoardHeader from '.';

describe('TaskBoardHeader', () => {
  it('should render the TaskBoardHeader component', () => {
    render(<TaskBoardHeader title="TaskBoardHeader" />);

    expect(screen.getByText('TaskBoardHeader')).toBeInTheDocument();
  });

  it('should render the TaskBoardHeader component with default title', () => {
    const defaultTitle = 'Tarefas';

    render(<TaskBoardHeader />);

    expect(screen.getByText(defaultTitle)).toBeInTheDocument();
  });

  it('should render with the correct variant and HTML tag', () => {
    const variant = 'h5';
    const tag = 'h1';
    render(
      <TaskBoardHeader title="TaskBoardHeader" variant={variant} tag={tag} />
    );

    const textElement = screen.getByText('TaskBoardHeader');
    expect(textElement).toBeInTheDocument();

    expect(textElement.tagName).toBe('H1');
    expect(textElement).toHaveClass('MuiTypography-h5');
  });
});
