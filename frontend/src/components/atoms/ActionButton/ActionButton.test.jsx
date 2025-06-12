import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import ActionButton from '.';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

describe('ActionButton', () => {
  it('should render the ActionButton component with text content', () => {
    render(<ActionButton>Test</ActionButton>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should render the ActionButton component with icon content', () => {
    render(
      <ActionButton>
        <ModeEditOutlineOutlinedIcon data-testid="icon" />
      </ActionButton>
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
