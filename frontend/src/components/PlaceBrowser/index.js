import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import { getPlaces } from "../../store/places";

const PlaceBrowser = () => {
  // const { placeId } = useParams();
  const place = useSelector(state => {
    return state.places.list.map(placeId => state.places[placeId]);
  });
  console.log(place)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaces());
  }, [dispatch]);

  if (!place) {
    return null;
  }

  return (
    <main>
        <nav>
        {place.map((place) => {
            return (
          <div className="place-entry">
          <NavLink to={`/places/${place.id}`} >
            <div
              className="place-img"
            >
                <img src={place.imageUrl} alt="location"></img>
            </div>
            <div>
              <div className="primary-text">{place.title}</div>
              <div className="secondary-text">{place.description}</div>
            </div>
           </NavLink>
          </div>
            );
        })}
      </nav>
    </main>
  );
};

export default PlaceBrowser;
