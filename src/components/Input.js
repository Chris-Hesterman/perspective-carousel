import { StyledLabel, StyledInput } from './FormStyles';

const Input = ({ title, name, value, handleChange, step }) => {
  return (
    <StyledLabel>
      <StyledInput
        name={name}
        type="number"
        value={value}
        onChange={handleChange}
        step={step}
      />
      {title}
    </StyledLabel>
  );
};

export default Input;
