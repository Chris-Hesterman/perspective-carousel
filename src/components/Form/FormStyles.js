import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  visibility: ${(props) => `${props.isVisible ? 'visible' : 'hidden'}`};
  flex-direction: column;
  position: absolute;
  top: 3.5rem;
  left: 0;
`;
