import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";

const Car = ({car}) => {
    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    const deleted = async () => {
        await dispatch(carActions.deleteCar({id}));
    }

    return (
        <div>
            <div>id:{id}</div>
            <div>model:{model}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={deleted}>Delete Car</button>
            <hr/>
        </div>
    );
};

export {Car};