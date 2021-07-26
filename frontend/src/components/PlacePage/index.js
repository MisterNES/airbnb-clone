import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import { getPlace } from "../../store/places";

const PlacePage = () => {
    const { placeId } = useParams();
    const currrentPlace = place[placeId];

    useEffect(() => {
        dispatch(getPlace(place));
      }, [dispatch]);

    return(
        <div>
            <div>
                <img alt='location' src={currrentPlace.id} />
            </div>
            <div>
                {currrentPlace.title}
            </div>
            <div>
                {place.description}
            </div>
        </div>
    )
}
