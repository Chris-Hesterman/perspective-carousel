import { settingsReducer } from './reducers';

describe('settingsReducer', () => {
  it('returns correct new state object when existing state object and an appropriate action object are provided', () => {
    const state = {
      facetInput: 3,
      widthInput: 15,
      heightInput: 10,
      marginInput: 0,
      perspectiveInput: 80,
      originYInput: 80,
      zAxisInput: 0
    };
    const testAction1 = { type: 'facet', payload: 12 };

    const expected1 = {
      facetInput: 12,
      widthInput: 15,
      heightInput: 10,
      marginInput: 0,
      perspectiveInput: 80,
      originYInput: 80,
      zAxisInput: 0
    };
    const actual1 = settingsReducer(state, testAction1);

    expect(actual1).toEqual(expected1);

    const testAction2 = { type: 'originY', payload: 125 };
    const expected2 = {
      facetInput: 3,
      widthInput: 15,
      heightInput: 10,
      marginInput: 0,
      perspectiveInput: 80,
      originYInput: 125,
      zAxisInput: 0
    };
    const actual2 = settingsReducer(state, testAction2);

    expect(actual2).toEqual(expected2);

    const testAction3 = { type: 'width', payload: 25 };
    const expected3 = {
      facetInput: 3,
      widthInput: 25,
      heightInput: 10,
      marginInput: 0,
      perspectiveInput: 80,
      originYInput: 80,
      zAxisInput: 0
    };
    const actual3 = settingsReducer(state, testAction3);

    expect(actual3).toEqual(expected3);

    const testAction4 = { type: 'height', payload: 25 };
    const expected4 = {
      facetInput: 3,
      widthInput: 15,
      heightInput: 25,
      marginInput: 0,
      perspectiveInput: 80,
      originYInput: 80,
      zAxisInput: 0
    };
    const actual4 = settingsReducer(state, testAction4);

    expect(actual4).toEqual(expected4);

    const testAction5 = { type: 'margin', payload: 10 };
    const expected5 = {
      facetInput: 3,
      widthInput: 15,
      heightInput: 10,
      marginInput: 10,
      perspectiveInput: 80,
      originYInput: 80,
      zAxisInput: 0
    };
    const actual5 = settingsReducer(state, testAction5);

    expect(actual5).toEqual(expected5);

    const testAction6 = { type: 'perspective', payload: 100 };
    const expected6 = {
      facetInput: 3,
      widthInput: 15,
      heightInput: 10,
      marginInput: 0,
      perspectiveInput: 100,
      originYInput: 80,
      zAxisInput: 0
    };
    const actual6 = settingsReducer(state, testAction6);

    expect(actual6).toEqual(expected6);

    const testAction7 = { type: 'zAxis', payload: -55 };
    const expected7 = {
      facetInput: 3,
      widthInput: 15,
      heightInput: 10,
      marginInput: 0,
      perspectiveInput: 80,
      originYInput: 80,
      zAxisInput: -55
    };
    const actual7 = settingsReducer(state, testAction7);

    expect(actual7).toEqual(expected7);
  });
});
