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

const StyledInput = styled.input`
  height: 2rem;
  width: 5rem;
  font-size: 2rem;
  margin-right: 0.5rem;
  outline: none;
`;

const StyledLabel = styled.label`
  color: white;
  font-size: 1.5rem;
  font-weight: 2rem;
  border: 3px double lime;
  margin-left: 1rem;
`;

const App = () => {
  const [facetInput, setFacetInput] = useState(3);
  const [widthInput, setWidthInput] = useState(15);
  const [heightInput, setHeightInput] = useState(10);
  const [marginInput, setMarginInput] = useState(0);

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
    if (e.target.name === 'margin') {
      setMarginInput(+e.target.value);
    }
  };
  return (
    <StyledApp className="App" perspective={200}>
      <Carousel
        number={facetInput}
        width={widthInput}
        height={heightInput}
        margin={marginInput}
      />
      <StyledForm>
        <StyledLabel>
          <StyledInput
            name="facets"
            type="number"
            value={facetInput}
            onChange={handleChange}
            min="3"
          />
          # FACETS
        </StyledLabel>
        <StyledLabel>
          <StyledInput
            name="width"
            type="number"
            value={widthInput}
            onChange={handleChange}
            min="10"
            step="5"
          />
          WIDTH - rem
        </StyledLabel>
        <StyledLabel>
          <StyledInput
            name="height"
            type="number"
            value={heightInput}
            onChange={handleChange}
            min="5"
            step="5"
          />
          HEIGHT - rem
        </StyledLabel>
        <StyledLabel>
          <StyledInput
            name="margin"
            type="number"
            value={marginInput}
            onChange={handleChange}
            min="0"
            step="2"
          />
          MARGIN - rem
        </StyledLabel>
      </StyledForm>
    </StyledApp>
  );
};

export default App;
