const UserDetails = ({user}) => {


    return (
        <div>

            <h2>{user.id}</h2>
            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <div>{user.email}</div>
            <div>{user.address.suite}</div>
            <div>{user.address.city}</div>
            <div>{user.address.zipcode}</div>
            <div>{user.address.geo.lat}</div>
            <div>{user.address.geo.lng}</div>
            <div>{user.address.street}</div>

        </div>
    );
};

export {UserDetails};