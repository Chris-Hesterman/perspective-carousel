import styled from 'styled-components';

const StyledFacet = styled.div`
  display: flex;
  color: lime;
  justify-content: center;
  align-items: center;
  background: rgba(200, 200, 200, 0.5);
  border: 1px solid lime;
  height: ${(props) => `${props.height}rem`};
  width: ${(props) => `${props.width}rem`};
  position: absolute;
  margin: ${(props) => `${props.margin / 2}rem`};
  left: ${(props) => `${-props.width / 2}rem`};
  top: ${(props) => `${-props.height / 2}rem`};
  transform: ${(props) =>
    `rotateY(${props.angle}deg) translateZ(${props.apothem}rem)`};
`;
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
