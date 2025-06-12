import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import ListHeader from '.';

describe('ListHeader', () => {
  it('should render the ListHeader component with title and count', () => {
    render(<ListHeader title="ListHeader" count={1} />);

    expect(screen.getByText('ListHeader')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
