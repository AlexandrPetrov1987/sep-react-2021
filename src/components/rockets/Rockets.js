import React, {useEffect, useState} from 'react';

import {Rocket} from "../rocket/Rocket";
import {getRockets} from "../../services";

const Rockets = () => {

    const [rockets, setRockets] = useState([]);

    useEffect(() => {

        getRockets().then(value => setRockets(value.filter(value => value.launch_year !== '2020')));

    }, [])

    return (

        <div>
            {
                rockets.map((rocket, index) => <Rocket key={index} item={rocket}/>)
            }
        </div>
    );
};

export {Rockets};