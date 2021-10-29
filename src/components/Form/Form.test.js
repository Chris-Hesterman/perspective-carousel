import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import { initialSettings } from '../../constants';

describe('<Form /> component', () => {
  describe('settings', () => {
    const handleChange = jest.fn();
    const initialProps = {
      facetInput: 3,
      widthInput: 15,
      heightInput: 10,
      marginInput: 0,
      perspectiveInput: 80,
      originYInput: 80,
      zAxisInput: 0,
      handleChange: handleChange,
      settings: initialSettings
    };

    beforeEach(() => {
      render(<Form {...initialProps} />);
    });

    afterEach(() => {
      jest.clearAllMocks();
      cleanup();
    });

    it('renders facets input and responds to changes', () => {
      const facets = screen.getByLabelText(/facets/i);

      expect(facets).toBeInTheDocument();
      expect(facets.value).toBe('3');
      userEvent.type(facets, '12');
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('renders width input and responds to changes', () => {
      const width = screen.getByLabelText(/width/i);

      expect(width).toBeInTheDocument();
      expect(width.value).toBe('15');
      userEvent.type(width, '20');
      expect(handleChange).toHaveBeenCalledTimes(2);
    });

    it('renders height input and responds to changes', () => {
      const height = screen.getByLabelText(/height/i);

      expect(height).toBeInTheDocument();
      expect(height.value).toBe('10');
      userEvent.type(height, '15');
      expect(handleChange).toHaveBeenCalledTimes(2);
    });

    it('renders margin input and responds to changes', () => {
      const margin = screen.getByLabelText(/margin/i);

      expect(margin).toBeInTheDocument();
      expect(margin.value).toBe('0');
      userEvent.type(margin, '2');
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('renders y-origin input and responds to changes', () => {
      const origin = screen.getByLabelText(/y origin/i);

      expect(origin).toBeInTheDocument();
      expect(origin.value).toBe('80');
      userEvent.type(origin, '85');
      expect(handleChange).toHaveBeenCalledTimes(2);
    });

    it('renders perspective input and responds to changes', () => {
      const perspective = screen.getByLabelText(/perspective/i);

      expect(perspective).toBeInTheDocument();
      expect(perspective.value).toBe('80');
      userEvent.type(perspective, '85');
      expect(handleChange).toHaveBeenCalledTimes(2);
    });

    it('renders z axis input and responds to changes', () => {
      const zAxis = screen.getByLabelText(/z axis/i);

      expect(zAxis).toBeInTheDocument();
      expect(zAxis.value).toBe('0');
      userEvent.type(zAxis, '5');
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });
});
