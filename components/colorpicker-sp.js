const ratingColors = () => {
  return [
    'blue',
    'green',
    'red',
    'orange',
    'yellow',
    'purple',
    'black',
    'white'
  ].map(c => ({ name: c, selected: false }))
};

const selectColor = (name) => {
  return ratingColors()
    .map(c => {
      if (c.name !== name) return c;
      return Object.assign(c, { selected: true });
    })
};

const getState = (sp) => {
  return function() {
    return { colors: sp.apply(this, arguments) };
  };
};

const ratingColorButtons = getState(() => {
  // default to white as selected
  return ratingColors()
    .map(c => Object.assign(c, { selected: c.name === 'white' }));
});

const selectedRatingColorButtons = getState(selectColor);

export { ratingColorButtons, selectedRatingColorButtons };

