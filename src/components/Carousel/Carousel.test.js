import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import Carousel from './Carousel';
// import App from '../App/App';

describe('Carousel', () => {
  const testProps = {
    rotationAngle: 0,
    number: 3,
    width: 15,
    height: 10,
    margin: 0,
    zAxis: 0
  };

  const testProps2 = {
    number: 12,
    width: 15,
    height: 10,
    margin: 0,
    zAxis: 0
  };

  const testProps3 = {
    number: 25,
    width: 15,
    height: 10,
    margin: 0,
    zAxis: 0
  };

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('renders 3 initial facets', () => {
    render(<Carousel {...testProps} />);
    const renderedFacets = screen.getAllByTitle('facet');

    expect(renderedFacets.length).toBe(3);
  });

  it('renders any number of facets >= 0', () => {
    render(<Carousel {...testProps2} />);
    const renderedFacets2 = screen.getAllByTitle('facet');

    expect(renderedFacets2.length).toBe(12);

    cleanup();

    render(<Carousel {...testProps3} />);
    const renderedFacets3 = screen.getAllByTitle('facet');

    expect(renderedFacets3.length).toBe(25);
    cleanup();
  });

  it('responds to clicking on it', async () => {
    render(<Carousel {...testProps} />);
    // render(<App />);

    const firstFacet = screen.getByText('1');
    const secondFacet = screen.getByText('2');
    const thirdFacet = screen.getByText('3');

    expect(firstFacet).toHaveStyle(
      'background: rgba(200, 200, 200, 0.5); color: lime;'
    );
    expect(firstFacet).toHaveTextContent('1');

    expect(secondFacet).toHaveStyle(
      'background: rgba(100, 100, 100, 0.7); color: transparent;'
    );

    expect(thirdFacet).toHaveStyle(
      'background: rgba(100, 100, 100, 0.7); color: transparent;'
    );

    await new Promise((resolve) => setTimeout(() => resolve(), 725));

    userEvent.click(screen.getByText('1'));

    expect(screen.getByText('1')).toHaveStyle(
      'background: rgba(100, 100, 100, 0.7); color: transparent;'
    );

    expect(screen.getByText('2')).toHaveStyle(
      'background: rgba(200, 200, 200, 0.5); color: lime;'
    );

    expect(screen.getByText('3')).toHaveStyle(
      'background: rgba(100, 100, 100, 0.7); color: transparent;'
    );
  });
});
