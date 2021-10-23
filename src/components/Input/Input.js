import { StyledLabel, StyledInput } from './InputStyles';

const Input = ({ title, name, value, handleChange, step }) => {
  return (
    <StyledLabel>
      <StyledInput
        name={name}
        type="number"
        value={value}
        onChange={(e) => handleChange({ type: name, payload: +e.target.value })}
        step={step}
      />
      {title}
    </StyledLabel>
  );
};

export default Input;
