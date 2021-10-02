import { StyledForm } from './FormStyles';
import Input from '../Input/Input';
import { names, labels, steps } from '../../constants';

const Form = (props) => {
  const inputs = names.map((name, index) => {
    const value = props[`${name}Input`];

    return (
      <Input
        key={name}
        name={names[index]}
        type="number"
        value={value}
        handleChange={props.handleChange}
        step={steps[index]}
        title={labels[index]}
      />
    );
  });
  return <StyledForm isVisible={props.isVisible}>{inputs}</StyledForm>;
};

export default Form;
