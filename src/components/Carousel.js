import styled from 'styled-components';
import { findApothem, findAngle } from '../utils';
import Facet from './Facet';

const StyledCarousel = styled.div`
  height: 20rem;
  perspective: 100rem;
  perspective-origin: 0 50vh;
  transition: all 1s ease-in-out;
`;

const Carousel = ({ number }) => {
  let facets = [...Array(number + 1).keys()];
  facets.shift();

  const apothem = findApothem(facets.length, 30);
  const angle = findAngle(facets.length);

  const handleClick = (e) => {
    console.log(angle);
    console.log(e.target);
    const newAngle = angle * +e.target.textContent - 1;
    e.target.parentNode.style.transform = `rotateY(${newAngle}deg)`;
  };

  facets = facets.map((facet) => {
    return (
      <Facet
        key={facet}
        number={facet}
        angle={angle * (facet - 1)}
        apothem={apothem}
      />
    );
  });

  return (
    <StyledCarousel angle={angle} onClick={handleClick}>
      {facets}
    </StyledCarousel>
  );
};

export default Carousel;
