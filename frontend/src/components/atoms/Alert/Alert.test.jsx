import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Alert from '.';

describe('Alert', () => {
  it('should render the Alert component', () => {
    render(<Alert severity="error" />);

    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('should render the Alert component with custom message', () => {
    render(<Alert severity="error" message="Custom message" />);

    expect(screen.getByText('Custom message')).toBeInTheDocument();
  });

  it('should render the Alert component with custom severity', () => {
    render(<Alert severity="info" message="Custom message" />);

    const alert = screen.getByRole('alert');

    expect(alert).toHaveClass('MuiAlert-colorInfo');
  });
});
