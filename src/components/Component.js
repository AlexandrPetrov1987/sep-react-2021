import './Component.css'

function Comp(props) {
    let { name, age, status } = props;
    return (
        <div>
            <h2>{ name }</h2>
            <p>{ age }</p>
            <p>{ status }</p>
        </div>
    )
}
export default Comp;