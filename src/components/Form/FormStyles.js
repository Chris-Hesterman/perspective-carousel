import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  opacity: ${(props) => `${props.isVisible ? 1 : 0}`};
  flex-direction: column;
  position: absolute;
  top: 3.5rem;
  left: 0;
  transition: all 0.5s ease-in-out;
`;
