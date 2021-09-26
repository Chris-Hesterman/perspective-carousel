import { useState } from 'react';
import styled from 'styled-components';
import { findApothem, findAngle } from '../utils';
import Facet from './Facet';

const StyledCarousel = styled.div`
  height: ${(props) => `${props.height}rem`};
  transition: all 0.5s ease-in-out;
  transform-origin: center;
  transform-style: preserve-3d;
`;

const Carousel = ({ number, width, height, margin }) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [time, setTime] = useState(Date.now());
  let facets = [...Array(number + 1).keys()];
  facets.shift();

  const apothem = findApothem(facets.length, width + margin);
  const angle = findAngle(facets.length);

  const handleClick = (e) => {
    const timeNow = Date.now();

    if (timeNow - time > 700) {
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
        width={width}
        height={height}
      />
    );
  });

  return (
    <StyledCarousel angle={angle} onClick={handleClick} heigth={height}>
      {facets}
    </StyledCarousel>
  );
};

export default Carousel;
