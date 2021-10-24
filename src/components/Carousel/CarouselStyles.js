import styled from 'styled-components';

export const StyledCarousel = styled.div`
  transition: all 0.5s ease-in-out;
  transform-origin: ${(props) => `50% 50% ${props.zAxis}rem`};
  transform-style: preserve-3d;
  transform: ${(props) => `rotateY(0deg) translateZ(${props.zAxis}rem)`};
`;
