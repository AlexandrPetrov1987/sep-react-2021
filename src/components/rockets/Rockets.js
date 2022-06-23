import React, {useEffect, useState} from 'react';

import {Rocket} from "../rocket/Rocket";

const Rockets = () => {

    const [rockets, setRockets] = useState([]);

    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setRockets(value.filter(value => value.launch_year !== '2020')));

    }, [])

    return (

        <div>
            {
                rockets.map((rocket, index) => <Rocket key={index} mission_name={rocket.mission_name}
                                                        launch_year={rocket.launch_year}
                                                        mission_patch_small={rocket.links.mission_patch_small}/>)
            }
        </div>
    );
};

export {Rockets};