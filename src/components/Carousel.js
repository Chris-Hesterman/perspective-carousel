import { useState } from 'react';
import styled from 'styled-components';
import { findApothem, findAngle } from '../utils';
import Facet from './Facet';

const StyledCarousel = styled.div`
  height: 20rem;
  transition: all 1s ease-in-out;
  transform-origin: center;
  transform-style: preserve-3d;
`;

const Carousel = ({ number }) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [time, setTime] = useState(Date.now());
  let facets = [...Array(number + 1).keys()];
  facets.shift();

  const apothem = findApothem(facets.length, 30);
  const angle = findAngle(facets.length);

  const handleClick = (e) => {
    const timeNow = Date.now();
    console.log(timeNow - time);
    if (timeNow - time > 1000) {
      setRotationAngle(angle + rotationAngle);
      setTime(timeNow);
      e.target.parentNode.style.transform = `rotateY(${-rotationAngle}deg)`;
    }
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
