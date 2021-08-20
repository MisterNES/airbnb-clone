const LOAD_ALL = "place/LOAD_ALL";
const LOAD_ONE = "place/LOAD_ONE"

const loadAll = (list) => ({
  type: LOAD_ALL,
  list
});

const loadOne = (place) => ({
  type: LOAD_ONE,
  place,
})

export const getPlaces = () => async (dispatch) => {
  const res = await fetch(`/api/place`);

  if (res.ok) {
    const list = await res.json();
    dispatch(loadAll(list));
  }
};

export const getPlace = () => async(dispatch) => {
  const res = await fetch(`/api/place/:id`);

  if (res.ok) {
    const place = await res.json();
    dispatch(loadOne(place))
  }
}

const initialState = {
  list: [],
  types: [],
};

const sortList = (list) => {
  return list.sort((placeA, placeB) => {
      return placeA.no - placeB.no;
    }).map((place) => place.id);
};

const placeReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_ALL: {
        const allPlaces = {};
        action.list.forEach(place => {
          allPlaces[place.id] = place;
        });
        return {
          ...allPlaces,
          ...state,
          list: sortList(action.list),
        };
      }
      case LOAD_ONE: {
        const singlePlace = {};
        singlePlace[action.place.id] = action.place;
        return singlePlace;
      }
      default:
      return state;
  }
}

export default placeReducer;
