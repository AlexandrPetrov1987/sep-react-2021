import React, {useEffect, useState} from 'react';

import {User} from "../user/User";
import {UserDetails} from "../userDetails/UserDetails";
import {getUsers} from "../../services/userService";

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
                    id={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}/>
            }
            <hr/>
            {
                users.map((user) => <User key={user.id} item={user} userButton={userButton}/>)
            }

        </div>

    );
};

export {Users};




