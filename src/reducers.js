export const settingsReducer = (state, action) => {
  console.log('using reducer', action);
  const setting = action.type;
  const settings = {
    facet: () => {
      return action.payload;
    }
  };

  return settings[setting]();
};
