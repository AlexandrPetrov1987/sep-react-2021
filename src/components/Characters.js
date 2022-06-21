function Characters(props) {
    const { name, desc, picture, alt } = props;
    return <div>
        <h2>{name}</h2>
        <p>{desc}</p>
        <img src={picture} alt={alt}/>
    </div>

}

export default Characters;