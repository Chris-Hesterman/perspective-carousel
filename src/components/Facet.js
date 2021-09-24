import styled from 'styled-components';

const StyledFacet = styled.div`
  display: flex;
  color: lime;
  justify-content: center;
  align-items: center;
  background: rgba(200, 200, 200, 0.3);
  border: 1px solid lime;
  height: 20rem;
  width: 30rem;
  position: absolute;
  left: -15rem;
  top: 0;
  transform: ${(props) =>
    `rotateY(${props.angle}deg) translateZ(${props.apothem}rem)`};
`;
const Facet = ({ number, angle, apothem }) => {
  return (
    <StyledFacet angle={angle} apothem={apothem}>
      {number}
    </StyledFacet>
  );
};

export default Facet;
