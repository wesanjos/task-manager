import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import TaskHeader from '.';

describe('TaskHeader', () => {
  it('should render the TaskHeader component', () => {
    render(<TaskHeader description="TaskHeader" />);

    expect(screen.getByText('TaskHeader')).toBeInTheDocument();
  });

  it('should render the TaskHeader component with default variant and tag', () => {
    render(<TaskHeader description="TaskHeader" />);

    const textElement = screen.getByText('TaskHeader');
    expect(textElement).toBeInTheDocument();

    expect(textElement.tagName).toBe('H4');
    expect(textElement).toHaveClass('MuiTypography-h6');
  });
});
