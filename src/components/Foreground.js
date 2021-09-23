import styled from 'styled-components';
import { findAngle, findApothem, findRadius } from '../utils';
import Facet from './Facet';

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: pink;
  transform-style: preserve-3d;

  transition: all 0.5s ease-in-out;
`;

const Foreground = ({ number }) => {
  let time = Date.now();
  let facets = [...Array(number + 1).keys()];

  facets.shift();

  const apothem = findApothem(facets.length, 30);
  const angle = findAngle(facets.length);
  const radius = findRadius(facets.length, 30);
  let angleMultiplier = 1;

  const handleClick = (e) => {
    const newTime = Date.now();
    let timeSinceClick = newTime - time;
    console.log(e);
    if (timeSinceClick > 700) {
      let newAngle = angle * angleMultiplier;
      e.target.parentNode.style.transform = `rotateY(${newAngle}deg)`;
      angleMultiplier++;
      time = newTime;
    }
  };

  facets = facets.map((facet) => {
    return (
      <Facet
        num={facet}
        key={facet}
        angle={(facet - 1) * angle}
        apothem={apothem}
      />
    );
  });

  return (
    <StyledWrapper
      onClick={handleClick}
      // height={height}
      // width={width}
      apothem={apothem}
      radius={radius}
    >
      {facets}
    </StyledWrapper>
  );
};

export default Foreground;
