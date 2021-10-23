import { names, steps, labels } from './constants';
import Input from './components/Input/Input';

export const findApothem = (numSides, length) => {
  const radians = Math.PI / numSides;
  const tangent = Math.tan(radians);

  return +Math.abs(length / (2 * tangent)).toFixed(2);
};

export const findAngle = (numSides) => {
  return +(360 / numSides).toFixed(2);
};

export const findRadius = (numSides, length) => {
  const radians = Math.PI / numSides;
  const sin = Math.sin(radians);

  return +Math.abs(length / (2 * sin)).toFixed(2);
};

export const generateInputs = (settings, handleChange) => {
  return names.map((name, index) => {
    const value = settings[`${name}Input`];

    return (
      <Input
        key={name}
        name={names[index]}
        type="number"
        value={value}
        handleChange={handleChange}
        step={steps[index]}
        title={labels[index]}
        settings={settings}
      />
    );
  });
};
