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
  perspective: ${(props) => `${props.perspective}rem`};
  perspective-origin: ${(props) => `50% ${props.originY}%`};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5vh;
  left: 0;
`;

export const StyledInput = styled.input`
  height: 2rem;
  width: 5rem;
  font-size: 2rem;
  margin-right: 0.5rem;
  outline: none;
`;

export const StyledLabel = styled.label`
  color: white;
  font-size: 1.5rem;
  font-weight: 2rem;
  border: 3px double lime;
  margin-left: 1rem;
`;
