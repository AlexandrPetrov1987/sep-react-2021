import {useEffect, useState} from "react";

function Test() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => setUsers(value)
            )
    }, []);


    return (
        <div>
            <h2>qqqq</h2>
            {
                users.map(user => <div>{user.id} {user.name}</div>)
            }
        </div>
    );
}

export {Test};