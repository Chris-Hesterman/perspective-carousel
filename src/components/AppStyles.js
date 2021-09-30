import styled from 'styled-components';

export const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: url('./assets/bigspace.jpg');
  background-size: cover;
  overflow: hidden;
  transform: all 1s ease-in;
  transform-style: preserve-3d;
  perspective: ${(props) => `${props.perspective}rem`};
  perspective-origin: ${(props) => `50% ${props.originY}%`};
`;

export const StyledButton = styled.button`
  display: inline-block;
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: 1rem;
  width: 15rem;
  height: 2.5rem;
  outline: none;
  border: 1px solid red;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translate(2px, 2px);
    border-radius: 5px;
  }
`;
