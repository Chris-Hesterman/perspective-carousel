import styled from 'styled-components';

export const StyledCarousel = styled.div`
  height: ${(props) => `${props.height}rem`};
  transition: all 0.5s ease-in-out;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: ${(props) => `translateZ(${props.zIndex}rem)`};
`;
