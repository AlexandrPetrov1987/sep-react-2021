const UserDetails = (props) => {

    const {id, name, username, email} = props;

    return (
        <div>

            <h2>{id}</h2>
            <h2>{name}</h2>
            <p>{username}</p>
            <div>{email}</div>

        </div>
    );
};

export {UserDetails};