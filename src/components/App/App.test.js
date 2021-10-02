import { render, screen } from '@testing-library/react';
import App from './App';

describe('AppComponent', () => {
  it('renders button correctly', () => {
    render(<App />);
    const button = screen.getByText(/hide settings/i);
    expect(button).toBeInTheDocument();
  });
});

describe('onChange handler  (handleChange)', () => {
  it('properly updates input value', () => {
    render(<App />);
  });
});
