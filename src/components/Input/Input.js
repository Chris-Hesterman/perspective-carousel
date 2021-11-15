import { StyledLabel, StyledInput } from './InputStyles';

const Input = ({ title, name, value, handleChange, step }) => {
  // console.log('from input', handleChange);
  const hasMin = name === 'facet' || name === 'width' || name === 'height';

  return (
    <StyledLabel>
      <StyledInput
        name={name}
        type="number"
        value={value}
        onChange={(e) => handleChange({ type: name, payload: +e.target.value })}
        step={step}
        min={hasMin ? 0 : undefined}
      />
      {title}
    </StyledLabel>
  );
};

export default Input;
