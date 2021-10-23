import { render, screen, cleanup } from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel', () => {
  const testProps = {
    number: 3,
    height: 10,
    margin: 0,
    zAxis: 0
  };

  const testProps2 = {
    number: 12,
    height: 10,
    margin: 0,
    zAxis: 0
  };

  const testProps3 = {
    number: 25,
    height: 10,
    margin: 0,
    zAxis: 0
  };

  afterEach(cleanup);

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
  });
});
