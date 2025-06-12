import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Loading from '.';

describe('Loading', () => {
  it('should render the Loading component', () => {
    render(<Loading />);

    expect(screen.getByText('Carregando...')).toBeInTheDocument();
  });
});
