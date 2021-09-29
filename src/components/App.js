import { useState } from 'react';
import Carousel from './Carousel';
import { StyledApp, StyledButton } from './AppStyles';
import Form from './Form';

const App = () => {
  const [facetInput, setFacetInput] = useState(3);
  const [widthInput, setWidthInput] = useState(15);
  const [heightInput, setHeightInput] = useState(10);
  const [marginInput, setMarginInput] = useState(0);
  const [perspectiveInput, setPerspectiveInput] = useState(80);
  const [originYInput, setOriginYInput] = useState(80);
  const [zIndexInput, setZIndexInput] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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
    if (e.target.name === 'zIndex') {
      setZIndexInput(+e.target.value);
    }
  };

  const handleClick = (e) => {
    setIsVisible(!isVisible);
  };

  return (
    <StyledApp
      className="App"
      perspective={perspectiveInput}
      originY={originYInput}
    >
      <StyledButton onClick={handleClick}>
        {isVisible ? 'HIDE SETTINGS' : 'SHOW SETTINGS'}
      </StyledButton>
      <Carousel
        number={facetInput}
        width={widthInput}
        height={heightInput}
        margin={marginInput}
        zIndex={zIndexInput}
      />
      <Form
        isVisible={isVisible}
        facetInput={facetInput}
        widthInput={widthInput}
        heightInput={heightInput}
        marginInput={marginInput}
        perspectiveInput={perspectiveInput}
        originYInput={originYInput}
        zIndexInput={zIndexInput}
        handleChange={handleChange}
      />
    </StyledApp>
  );
};

export default App;
