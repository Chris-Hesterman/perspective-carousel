import { StyledFacet } from './FacetStyles';

const Facet = ({ number, angle, apothem, width, height }) => {
  return (
    <StyledFacet
      angle={angle}
      apothem={apothem}
      width={width}
      height={height}
      title="facet"
    >
      {number}
    </StyledFacet>
  );
};

export default Facet;
