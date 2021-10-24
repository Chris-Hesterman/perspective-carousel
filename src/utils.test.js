import { findApothem, findAngle, findRadius, generateInputs } from './utils';

describe('findApothem', () => {
  it('finds the apothem of a polygon given # of sides, and length of each side', () => {
    const actual = findApothem(12, 15);
    const expected = 27.99;

    expect(actual).toBe(expected);
  });
});

describe('findAngle', () => {
  it('finds angle between facets of polygon of given # of sides', () => {
    const actual = findAngle(7);
    const expected = 51.43;

    expect(actual).toBe(expected);
  });
});

describe('findRadius', () => {
  it('finds radius of polygon of given # of sides and length of each side', () => {
    const actual = findRadius(7, 15);
    const expected = 17.29;

    expect(actual).toBe(expected);
  });
});

describe('generateInputs', () => {
  it('generates array of Input components given a settings object and handleChange function', () => {
    const changeHandler = jest.fn();
    const settings = {
      facetInput: 3,
      widthInput: 15,
      heightInput: 10,
      marginInput: 0,
      perspectiveInput: 80,
      originYInput: 80,
      zAxisInput: 0
    };
    const settingsLength = Object.keys(settings).length;
    const inputs = generateInputs(settings, changeHandler);

    console.log(generateInputs(settings, changeHandler)[0]);

    expect(inputs).toHaveLength(settingsLength);
    expect(inputs[0].props.settings).toEqual(settings);
    expect(inputs[0].props.title).toBe('# FACETS');
    expect(inputs[0].props.handleChange).toEqual(changeHandler);
  });
});
