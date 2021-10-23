import { StyledForm } from './FormStyles';
import { generateInputs } from '../../utils';

const Form = ({ settings, handleChange, isVisible }) => {
  const inputs = generateInputs(settings, handleChange);

  return (
    <StyledForm title="form" isVisible={isVisible}>
      {inputs}
    </StyledForm>
  );
};

export default Form;
