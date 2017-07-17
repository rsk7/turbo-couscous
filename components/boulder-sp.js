const RATING_RANGE = 12;
const ratingTitle = rating => `V ${rating}`;

const ratings = () => {
  return Array(RATING_RANGE)
    .fill()
    .map((_, idx) => {
      return {
        rating: idx,
        name: ratingTitle(idx),
        selected: false
      }
    });
};

const selectRating = (ratingValue) => {
  return ratings()
    .map(r => {
      if (r.rating !== ratingValue) return r;
      return Object.assign(r, { selected: true });
    });
};

const getState = (ratings) => {
  return function() {
    return { buttons: ratings.apply(this, arguments) };
  }
};

const ratingButtons = getState(ratings);
const selectButton = getState(selectRating);

export { ratingButtons, selectButton };
