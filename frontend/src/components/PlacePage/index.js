import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import { getPlaces } from "../../store/places";

const PlacePage = () => {
    const dispatch = useDispatch();
    const { placeId } = useParams();
    console.log(placeId);
    const currentPlace = useSelector(state =>
        state.places[placeId]);
    console.log(currentPlace);

    useEffect(() => {
        dispatch(getPlaces());
    }, [dispatch]);

    if(!currentPlace){
        return null;
    }

    return(
        <div>
            {currentPlace && (<><div>
                <img alt='location' src={`${currentPlace?.imageUrl}`} />
            </div>
            <div>
                {currentPlace?.title}
            </div>
            <div>
                <p>{currentPlace?.city}, {currentPlace?.state}</p>
            </div>
            <div>
                {currentPlace?.description}
            </div>
            </>)}


        </div>
    )
}

export default PlacePage;
