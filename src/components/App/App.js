import { useState, useReducer } from 'react';
import Carousel from '../Carousel/Carousel';
import { StyledApp, StyledButton } from './AppStyles';
import Form from '../Form/Form';
import { settingsReducer } from '../../reducers.js';
import { initialSettings } from '../../constants';

const App = () => {
  const [settings, dispatch] = useReducer(settingsReducer, initialSettings);
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = (e) => {
    setIsVisible(!isVisible);
  };

  return (
    <StyledApp
      className="App"
      title="app"
      perspective={settings.perspectiveInput}
      originY={settings.originYInput}
      zAxis={settings.zAxisInput}
    >
      <StyledButton onClick={handleClick}>
        {isVisible ? 'HIDE SETTINGS' : 'SHOW SETTINGS'}
      </StyledButton>
      <Carousel
        number={settings.facetsInput}
        width={settings.widthInput}
        height={settings.heightInput}
        margin={settings.marginInput}
        zAxis={settings.zAxisInput}
      />
      <Form
        isVisible={isVisible}
        facetInput={settings.facetsInput}
        widthInput={settings.widthInput}
        heightInput={settings.heightInput}
        marginInput={settings.marginInput}
        perspectiveInput={settings.perspectiveInput}
        originYInput={settings.originYInput}
        zAxisInput={settings.zAxisInput}
        handleChange={dispatch}
        settings={settings}
      />
    </StyledApp>
  );
};

export default App;
