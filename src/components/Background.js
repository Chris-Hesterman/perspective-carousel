import styled from 'styled-components';
import Foreground from './Foreground';

const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: url('assets/bigspace.jpg');
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  perspective: 1cm;
  overflow: hidden;
`;

const Background = () => {
  return (
    <StyledBackground>
      <Foreground></Foreground>
    </StyledBackground>
  );
};

export default Background;
