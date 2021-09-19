import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const StyledForeground = styled.div`
  background: rgba(255, 200, 200, 0.5);
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  @keyframes rotate {
    50% {
      transform: translateZ(20px) rotate3d(0.5, -0.5, 0, 360deg);
    }
  }
`;

const Foreground = () => {
  const [turning, setTurning] = useState(false);
  const handleClick = (e) => {
    if (!turning) {
      e.target.style.animation = 'rotate 5s linear infinite';
      setTurning(true);
    } else {
      e.target.style.animation = null;
      setTurning(false);
    }
  };

  return (
    <StyledForeground onClick={handleClick}>
      <h1>Foreground</h1>
    </StyledForeground>
  );
};

export default Foreground;
