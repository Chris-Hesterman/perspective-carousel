import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  visibility: ${(props) => `${props.isVisible ? 'visible' : 'hidden'}`};
  flex-direction: column;
  position: absolute;
  top: 3.5rem;
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
