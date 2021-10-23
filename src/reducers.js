export const settingsReducer = (state, action) => {
  const setting = action.type;
  const options = {
    facet: () => {
      return { ...state, facetInput: action.payload };
    },
    width: () => {
      return { ...state, widthInput: action.payload };
    },
    height: () => {
      return { ...state, heightInput: action.payload };
    },
    margin: () => {
      return { ...state, marginInput: action.payload };
    },
    perspective: () => {
      return { ...state, perspectiveInput: action.payload };
    },
    originY: () => {
      return { ...state, originYInput: action.payload };
    },
    zAxis: () => {
      return { ...state, zAxisInput: action.payload };
    }
  };

  return options[setting]();
};
