import { useState } from 'react';
import Carousel from './Carousel';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: slategray;
  overflow: hidden;
  perspective: ${(props) => `${props.perspective}rem`};
  perspective-origin: 50% 125%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5vh;
  left: 0;
`;

const App = () => {
  const [facetInput, setFacetInput] = useState(3);
  const [widthInput, setWidthInput] = useState(15);
  const [heightInput, setHeightInput] = useState(10);
  // const [perspectiveInput, setPerspectiveInput] = useState(10);

  const handleChange = (e) => {
    if (e.target.name === 'facets') {
      setFacetInput(+e.target.value);
    }
    if (e.target.name === 'width') {
      setWidthInput(+e.target.value);
    }
    if (e.target.name === 'height') {
      setHeightInput(+e.target.value);
    }
    // if (e.target.name === 'perspective') {
    //   setPerspectiveInput(+e.target.value);
    // }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <StyledApp className="App" perspective={200}>
      <Carousel number={facetInput} width={widthInput} height={heightInput} />
      <StyledForm>
        <input
          name="facets"
          type="number"
          value={facetInput}
          onChange={handleChange}
          placeholder="# OF FACETS"
          min="3"
        />
        <input
          name="width"
          type="number"
          value={widthInput}
          onChange={handleChange}
          placeholder="WIDTH (rem)"
          min="10"
          step="5"
        />
        <input
          name="height"
          type="number"
          value={heightInput}
          onChange={handleChange}
          placeholder="HEIGHT (rem)"
          min="5"
          step="5"
        />
        {/* <input
          name="perspective"
          type="number"
          value={perspectiveInput}
          onChange={handleChange}
          placeholder="PERSPECTIVE (rem)"
          min="10"
          step="10"
        /> */}
      </StyledForm>
    </StyledApp>
  );
};

export default App;
