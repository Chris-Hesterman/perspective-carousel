import { useState } from 'react';
import Foreground from './Foreground';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  /* background-image: url('assets/bigspace.jpg'); */
  background: slategray;
  background-size: cover;
  perspective: 90rem;
  /* perspective-origin: 50% 150%;   */
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
    setNumberOfFacets(facetInput);
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
      {!inputVisible && (
        <Foreground
          number={+numberOfFacets}
          // height={heightInput}
          // width={widthInput}
        ></Foreground>
      )}
    </StyledApp>
  );
};

export default App;
