import {
  render,
  act,
  screen,
  fireEvent,
  cleanup,
  waitForElementToBeRemoved,
  findByText,
  waitFor,
  findByTitle
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import Carousel from './Carousel';
import App from '../App/App';

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

  it('responds to clicking on it', () => {
    const handleClickMock = jest.fn();
    const { getByText, container } = render(
      <Carousel {...testProps} onClick={handleClickMock} />
    );
    // const { getByText, container } = render(<App />);

    const firstFacet = screen.getByText('1');
    const secondFacet = screen.getByText('2');
    const thirdFacet = screen.getByText('3');

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
    console.log(container);
    const carousel = screen.getByTitle('carousel');
    console.log(fireEvent.click(screen.getByTitle('carousel')));

    expect(handleClickMock).toHaveBeenCalled();
  });
});
