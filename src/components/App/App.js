import { useState, useReducer } from 'react';
import Carousel from '../Carousel/Carousel';
import { StyledApp, StyledButton } from './AppStyles';
import Form from '../Form/Form';
import { settingsReducer } from '../../reducers.js';

const App = () => {
  const [facetInput, dispatchFacet] = useReducer(settingsReducer, 3);
  const [widthInput, setWidthInput] = useState(15);
  const [heightInput, setHeightInput] = useState(10);
  const [marginInput, setMarginInput] = useState(0);
  const [perspectiveInput, setPerspectiveInput] = useState(80);
  const [originYInput, setOriginYInput] = useState(80);
  const [zAxisInput, setZAxisInput] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (e) => {
    console.log(e);
    console.log('handlingChange');
    // if (e.target.name === 'facet') {
    //   setFacetInput(+e.target.value);
    // }
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
    if (e.target.name === 'originY') {
      setOriginYInput(+e.target.value);
    }
    if (e.target.name === 'zAxis') {
      setZAxisInput(+e.target.value);
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
      zAxis={zAxisInput}
    >
      <StyledButton onClick={handleClick}>
        {isVisible ? 'HIDE SETTINGS' : 'SHOW SETTINGS'}
      </StyledButton>
      <Carousel
        number={facetInput}
        width={widthInput}
        height={heightInput}
        margin={marginInput}
        zAxis={zAxisInput}
      />
      <Form
        isVisible={isVisible}
        facetInput={facetInput}
        widthInput={widthInput}
        heightInput={heightInput}
        marginInput={marginInput}
        perspectiveInput={perspectiveInput}
        originYInput={originYInput}
        zAxisInput={zAxisInput}
        handleChange={dispatchFacet}
      />
    </StyledApp>
  );
};

export default App;
