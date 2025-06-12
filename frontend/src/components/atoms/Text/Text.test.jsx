import { describe, expect, it } from 'vitest';

import Text from '.';
import { render, screen } from '@testing-library/react';

describe('Text', () => {
  it('should display the correct text content', () => {
    const message = 'Test, message';
    render(<Text>{message}</Text>);

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('should render with the correct variant and HTML tag', () => {
    const variant = 'h4';
    const tag = 'h2';
    render(
      <Text variant={variant} tag={tag}>
        Test, message
      </Text>
    );

    const textElement = screen.getByText('Test, message');
    expect(textElement).toBeInTheDocument();

    expect(textElement.tagName).toBe('H2');
    expect(textElement).toHaveClass('MuiTypography-h4');
  });

  it('should render with default variant and HTML tag', () => {
    render(<Text>Test, message</Text>);

    const textElement = screen.getByText('Test, message');
    expect(textElement).toBeInTheDocument();

    expect(textElement.tagName).toBe('H1');
    expect(textElement).toHaveClass('MuiTypography-body1');
  });
});
