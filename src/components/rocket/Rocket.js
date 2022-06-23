const Rocket = ({mission_name, launch_year, mission_patch_small}) => {

    return (

        <div>

            <div>{mission_name}</div>
            <div>{launch_year}</div>
            <img src={mission_patch_small} alt={mission_patch_small}/>

        </div>

    );
};

export {Rocket};