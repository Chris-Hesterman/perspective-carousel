import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import Carousel from './Carousel';

describe('Carousel', () => {
  // const handleClick = jest.fn();
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

  it('responds to clicking on it', async () => {
    const handleClick = jest.fn();
    const { getByTitle, getByText, rerender } = render(
      <Carousel {...testProps} onClick={handleClick} />
    );

    const firstFacet = getByText('1');
    const secondFacet = getByText('2');
    const thirdFacet = getByText('3');

    expect(firstFacet).toHaveAttribute(
      'style',
      'background: rgba(200, 200, 200, 0.5); color: lime;'
    );
    expect(firstFacet).toHaveTextContent('1');

    expect(secondFacet).toHaveAttribute(
      'style',
      'background: rgba(100, 100, 100, 0.7); color: transparent;'
    );

    expect(thirdFacet).toHaveAttribute(
      'style',
      'background: rgba(100, 100, 100, 0.7); color: transparent;'
    );

    userEvent.click(screen.getByTitle('carousel'));

    screen.debug();
    rerender(<Carousel {...testProps} onClick={handleClick} />);
    expect(screen.getByTitle('carousel')).toHaveStyleRule(
      'transform',
      'rotateY(30deg) translateZ(0rem)'
    );
  });
});
