import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import TaskInfoItem from '.';

vi.mock('../../atoms/Text', () => {
  return {
    default: vi.fn(({ children, ...props }) => (
      <span data-testid="mock-text" {...props}>
        {children}
      </span>
    )),
  };
});

describe('TaskInfoItem', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the item with icon and text', () => {
    const testText = 'Test Text';
    const TestIcon = <AccessTimeIcon data-testid="time-icon" />;

    render(<TaskInfoItem icon={TestIcon} text={testText} />);

    expect(screen.getByTestId('mock-text')).toHaveTextContent(testText);
    expect(screen.getByTestId('time-icon')).toBeInTheDocument();
  });

  it('should apply the className prop to the item', () => {
    const testClassName = 'test-class';
    render(
      <TaskInfoItem
        icon={<AccessTimeIcon />}
        text="Test Text"
        className={testClassName}
      />
    );

    const element = screen.getByRole('listitem');
    expect(element).toHaveClass(testClassName);
  });
});
