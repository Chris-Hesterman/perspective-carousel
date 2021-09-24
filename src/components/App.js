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
`;

const App = () => {
  const [facetInput, setFacetInput] = useState('');
  const [widthInput, setWidthInput] = useState('');
  const [heightInput, setheightInput] = useState('');
  const [numberOfFacets, setNumberOfFacets] = useState('');
  const [inputVisible, setInputVisible] = useState(true);

  const handleChange = (e) => {
    if (e.target.name === 'facets') {
      setFacetInput(e.target.value);
    }
    if (e.target.name === 'width') {
      setWidthInput(e.target.value);
    }
    if (e.target.name === 'height') {
      setheightInput(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(facetInput);
    setNumberOfFacets(+facetInput);
    setInputVisible(false);
  };
  return (
    <StyledApp className="App">
      {inputVisible && (
        <form onSubmit={handleSubmit}>
          <input
            name="facets"
            type="number"
            value={facetInput}
            onChange={handleChange}
            placeholder="# OF FACETS"
            min="3"
          />
        </form>
      )}
      {!inputVisible && <Carousel number={numberOfFacets} />}
    </StyledApp>
  );
};

export default App;
