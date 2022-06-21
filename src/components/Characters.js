function Character(props) {

    const {id, name, status, species, gender, image, alt} = props;
    return (
        <div>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={image} alt={alt}/>
        </div>
    )

}

export default Character;