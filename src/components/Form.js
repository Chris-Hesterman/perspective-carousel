import { StyledForm, StyledLabel, StyledInput } from './FormStyles';

const Form = ({
  isVisible,
  facetInput,
  widthInput,
  heightInput,
  marginInput,
  perspectiveInput,
  originYInput,
  zAxisInput,
  handleChange
}) => {
  return (
    <StyledForm isVisible={isVisible}>
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
          step="5"
        />
        Y ORIGIN - %
      </StyledLabel>
      <StyledLabel>
        <StyledInput
          name="zAxis"
          type="number"
          value={zAxisInput}
          onChange={handleChange}
          step="5"
        />
        Z AXIS (beta)
      </StyledLabel>
    </StyledForm>
  );
};

export default Form;
