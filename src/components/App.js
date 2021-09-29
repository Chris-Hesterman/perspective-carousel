import { useState } from 'react';
import Carousel from './Carousel';
import { StyledApp, StyledForm, StyledInput, StyledLabel } from './AppStyles';

const App = () => {
  const [facetInput, setFacetInput] = useState(3);
  const [widthInput, setWidthInput] = useState(15);
  const [heightInput, setHeightInput] = useState(10);
  const [marginInput, setMarginInput] = useState(0);
  const [perspectiveInput, setPerspectiveInput] = useState(80);
  const [originYInput, setOriginYInput] = useState(80);

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
    if (e.target.name === 'perspective') {
      setPerspectiveInput(+e.target.value);
    }
    if (e.target.name === 'origin') {
      setOriginYInput(+e.target.value);
    }
  };
  return (
    <StyledApp
      className="App"
      perspective={perspectiveInput}
      originY={originYInput}
    >
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
        <StyledLabel>
          <StyledInput
            name="perspective"
            type="number"
            value={perspectiveInput}
            onChange={handleChange}
            min="80"
            step="10"
          />
          PERSPECTIVE - rem
        </StyledLabel>
        <StyledLabel>
          <StyledInput
            name="origin"
            type="number"
            value={originYInput}
            onChange={handleChange}
            min="80"
            step="5"
          />
          Y ORIGIN - %
        </StyledLabel>
      </StyledForm>
    </StyledApp>
  );
};

export default App;
