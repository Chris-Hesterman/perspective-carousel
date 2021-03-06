import { useRef, useEffect, useCallback } from 'react';
import { findApothem, findAngle } from '../../utils';
import { StyledCarousel } from './CarouselStyles';
import Facet from '../Facet/Facet';

const Carousel = ({ number, width, height, margin, zAxis }) => {
  let time = Date.now();
  const carouselRef = useRef();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let backSides = [];
  let rotationAngle = 0;
  let facets = [...Array(number + 1).keys()];
  facets.shift();

  const apothem = findApothem(facets.length, width + margin);
  const angle = findAngle(facets.length);

  const handleClick = (e) => {
    const timeNow = Date.now();

    if (timeNow - time > 700 && e.target.title === 'facet') {
      rotationAngle += angle;
      time = timeNow;
      e.target.parentNode.style.transform = `rotateY(${-rotationAngle}deg) translateZ(${zAxis}rem)`;

      changeFacetColor();
    }
  };

  const changeFacetColor = () => {
    const last = backSides[backSides.length - 1];
    const newBackSide = last === facets.length ? 1 : last + 1;

    backSides.shift();
    backSides.push(newBackSide);
    setFacetColor(carouselRef, backSides);
  };

  const setFacetColor = useCallback(() => {
    carouselRef.current.childNodes.forEach((node) => {
      const isBehind = backSides.includes(+node.textContent);

      node.style.background = isBehind
        ? 'rgba(100, 100, 100, .7)'
        : 'rgba(200, 200, 200, 0.5)';
      node.style.color = isBehind ? 'transparent' : 'lime';
    });
  }, [backSides]);

  const generateFacets = () => {
    return facets.map((facet) => {
      const newAngle = angle * (facet - 1);

      if (newAngle >= 90 && newAngle <= 270) {
        backSides.push(facet);
      }
      return (
        <Facet
          key={facet}
          id={facet}
          number={facet}
          angle={newAngle}
          apothem={apothem}
          width={width}
          height={height}
        />
      );
    });
  };

  useEffect(() => {
    setFacetColor();
  }, [backSides, setFacetColor]);

  return (
    <StyledCarousel
      rotationAngle={rotationAngle}
      angle={angle}
      onClick={handleClick}
      ref={carouselRef}
      zAxis={zAxis}
      title="carousel"
      data-cy="carousel"
    >
      {generateFacets()}
    </StyledCarousel>
  );
};

export default Carousel;
