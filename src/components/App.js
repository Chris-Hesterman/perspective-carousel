import styled from 'styled-components';

const StyledApp = styled.div`
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: white;
`;
const App = () => {
  return (
    <StyledApp className="App">
      <h1>Hello Boilerplate!</h1>
    </StyledApp>
  );
};

export default App;
