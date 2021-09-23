import styled from 'styled-components';

export const StyledFacet = styled.div`
  background: rgba(100, 100, 100, 0.4);
  color: lime;
  position: absolute;
  top: calc(50vh - 10rem);
  left: calc(50vw - 15rem);
  border: 1px solid lime;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 20rem;
  /* width: ${(props) => `${props.width}rem`};
  height: ${(props) => `${props.height}rem`}; */
  /* margin-left: 4rem; */
  transform: ${(props) =>
    `rotateY(${props.angle}deg) translateZ(${props.apothem}rem)`};
`;

const Facet = ({ num, angle, apothem }) => {
  return (
    <StyledFacet angle={angle} apothem={apothem}>
      <h1>{num}</h1>
    </StyledFacet>
  );
};

export default Facet;
