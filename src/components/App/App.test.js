import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('AppComponent', () => {
  beforeEach(() => {
    render(<App />);
  });
  afterEach(cleanup);

  describe('button', () => {
    it('renders correctly', () => {
      const button = screen.getByText(/hide settings/i);

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('HIDE SETTINGS');
    });

    it('changes text, toggles visibility of form', () => {
      const button = screen.getByText(/hide settings/i);
      const form = screen.getByTitle('form');

      expect(form).toBeVisible();
      userEvent.click(button);
      expect(button).toHaveTextContent('SHOW SETTINGS');
      expect(form).not.toBeVisible();
      userEvent.click(button);
      expect(form).toBeVisible();
      expect(button).toHaveTextContent('HIDE SETTINGS');
    });
  });

  it('renders Form', () => {
    const form = screen.getByTitle('form');

    expect(form).toBeInTheDocument();
  });

  it('renders Carousel', () => {
    const carousel = screen.getByTitle('carousel');

    expect(carousel).toBeInTheDocument();
    expect(carousel).toBeVisible();
  });
});
