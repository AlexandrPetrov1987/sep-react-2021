import React, {useEffect, useState} from 'react';

import {User} from "../user/User";
import {UserDetails} from "../userDetails/UserDetails";
import {getUsers} from "../../services";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {

        getUsers().then(value => setUsers(value))

    }, []);

    const userButton = (item) => {
        setUser(item);
    };

    return (

        <div>

            {
                user && <UserDetails
                    user={user}

                />
            }
            <hr/>
            {
                users.map((user) => <User key={user.id} item={user} userButton={userButton}/>)
            }

        </div>

    );
};

export {Users};




