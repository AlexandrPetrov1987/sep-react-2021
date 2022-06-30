import {Comments, Users} from "./components";
import './App.css';

const App = () => {

    return (
        <div className={'root'}>
            <Users/>
            <Comments/>

        </div>
    );
};

export default App;