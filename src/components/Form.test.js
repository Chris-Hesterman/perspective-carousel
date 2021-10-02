import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('<Form /> component', () => {
  it('renders settings correctly', () => {
    const initialProps = {
      facetInput: 3,
      widthInput: 15,
      heightInput: 10,
      marginInput: 0,
      perspectiveInput: 80,
      originYInput: 80,
      zAxisInput: 0
    };

    render(<Form {...initialProps} />);

    const facets = screen.getByLabelText(/facets/i);
    const width = screen.getByLabelText(/width/i);
    const height = screen.getByLabelText(/height/i);
    const margin = screen.getByLabelText(/margin/i);
    const origin = screen.getByLabelText(/y origin/i);
    const perspective = screen.getByLabelText(/perspective/i);
    const zAxis = screen.getByLabelText(/z axis/i);

    expect(facets).toBeInTheDocument();
    expect(facets.value).toBe('3');

    expect(width).toBeInTheDocument();
    expect(width.value).toBe('15');

    expect(height).toBeInTheDocument();
    expect(height.value).toBe('10');

    expect(margin).toBeInTheDocument();
    expect(margin.value).toBe('0');

    expect(origin).toBeInTheDocument();
    expect(origin.value).toBe('80');

    expect(perspective).toBeInTheDocument();
    expect(perspective.value).toBe('80');

    expect(zAxis).toBeInTheDocument();
    expect(zAxis.value).toBe('0');
  });
});
