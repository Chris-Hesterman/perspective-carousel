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
      const button = screen.getByText('HIDE SETTINGS');

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('HIDE SETTINGS');
    });

    it('changes text, toggles visibility of form', () => {
      const button = screen.getByText('HIDE SETTINGS');
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

describe('Form responds to user input appropriately', () => {
  it('responds to facets input', () => {
    render(<App />);

    const facets = screen.getByTitle('facets');

    expect(screen.getAllByTitle('facet').length).toBe(3);

    userEvent.type(facets, '{backspace}12');

    expect(screen.getAllByTitle('facet').length).toBe(12);
    expect(screen.getByTitle('facets')).toBeInTheDocument();
    expect(screen.getByTitle('facets')).toHaveValue(12);
    cleanup();
  });

  it('responds to width input', () => {
    render(<App />);

    const width = screen.getByTitle('width');

    expect(screen.getByText('3')).toHaveStyle('width: 15rem;');

    userEvent.type(width, '{backspace}{backspace}20');

    expect(screen.getByText('3')).toHaveStyle('width: 20rem;');
    expect(screen.getByTitle('width')).toBeInTheDocument();
    expect(screen.getByTitle('width')).toHaveValue(20);
    cleanup();
  });

  it('responds to height input', () => {
    render(<App />);

    const width = screen.getByTitle('height');

    expect(screen.getByText('3')).toHaveStyle('height: 10rem;');

    userEvent.type(width, '{backspace}{backspace}23');

    expect(screen.getByText('3')).toHaveStyle('height: 23rem;');
    expect(screen.getByTitle('height')).toBeInTheDocument();
    expect(screen.getByTitle('height')).toHaveValue(23);
    cleanup();
  });

  it('responds to margin input', () => {
    render(<App />);

    const margin = screen.getByTitle('margin');

    expect(margin).toHaveValue(0);

    userEvent.type(margin, '{backspace}10');

    expect(screen.getByTitle('margin')).toHaveValue(10);
    cleanup();
  });

  it('responds to perspective input', () => {
    render(<App />);

    const perspective = screen.getByTitle('perspective');

    expect(screen.getByTitle('perspective')).toHaveValue(80);

    userEvent.type(perspective, '{backspace}{backspace}100');

    // expect(screen.getByTitle('app')).toHaveStyle('perspective: 100rem;');
    expect(screen.getByTitle('perspective')).toBeInTheDocument();
    expect(screen.getByTitle('perspective')).toHaveValue(100);
    cleanup();
  });

  it('responds to originY input', () => {
    render(<App />);

    const originY = screen.getByTitle('originY');

    expect(originY).toHaveValue(80);

    userEvent.type(originY, '{backspace}{backspace}90');

    expect(screen.getByTitle('originY')).toHaveValue(90);

    cleanup();
  });

  it('responds to zAxis input', () => {
    render(<App />);

    const zAxis = screen.getByTitle('zAxis');

    expect(zAxis).toHaveValue(0);

    userEvent.type(zAxis, '{arrowleft}90');

    expect(screen.getByTitle('zAxis')).toHaveValue(90);

    cleanup();
  });
});
