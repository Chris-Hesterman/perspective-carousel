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
