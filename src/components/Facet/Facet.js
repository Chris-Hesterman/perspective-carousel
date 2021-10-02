import { StyledFacet } from './FacetStyles';

const Facet = ({ number, angle, apothem, width, height, margin }) => {
  return (
    <StyledFacet
      angle={angle}
      apothem={apothem}
      width={width}
      height={height}
      margin={margin}
    >
      {number}
    </StyledFacet>
  );
};

export default Facet;
