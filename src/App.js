import './App.css';
import Comp from './components/Component';

let arr = [
    {
        name: 'Vasya',
        age: 34,
        status: 'true',
        id : 1
    },
    {
        name: 'petya',
        age: 23,
        status: 'false',
        id : 2
    },
    {
        name: 'Ira',
        age: 28,
        status: 'true',
        id : 3
    }
]

function App() {
    return (
        <div className="App">
            <h1>Hello</h1>
            <div>
                <Comp
                    name={'Vasya'} age={23}
                    styleClass={'foo'}
                />
                <Comp
                    name={'Petya'} age={33}
                    styleClass={'bar'}
                />
            </div>
            <div>
                {
                arr.map(item => <Comp
                    key = {item.id}
                    name={item.name} age={item.age}
                    status={item.status}
                />)
                }
            </div>
        </div>
    );
}

export default App;
