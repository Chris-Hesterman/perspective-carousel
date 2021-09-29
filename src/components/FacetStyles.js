import styled from 'styled-components';

export const StyledFacet = styled.div`
  display: flex;
  color: lime;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  background: rgba(200, 200, 200, 0.5);
  border: 1px solid lime;
  height: ${(props) => `${props.height}rem`};
  width: ${(props) => `${props.width}rem`};
  &:hover {
    cursor: pointer;
  }
  position: absolute;
  margin: ${(props) => `${props.margin / 2}rem`};
  left: ${(props) => `${-props.width / 2}rem`};
  top: ${(props) => `${-props.height / 2}rem`};
  transition: all 0.2s ease-in;
  transform: ${(props) =>
    `rotateY(${props.angle}deg) translateZ(${props.apothem}rem)`};
`;
