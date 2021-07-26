const LOAD = "place/LOAD";

const load = (list) => ({
  type: LOAD,
  list,
});

export const getPlace = () => async (dispatch) => {
  const res = await fetch(`/api/place`);

  if (res.ok) {
    const list = await res.json();
    dispatch(load(list));
  }
};

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
      case LOAD: {
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
      default:
      return state;
  }
}

export default placeReducer;
