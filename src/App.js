import './App.css';
import Characters from './components/Characters.js'


function App() {


    return (
        <div>
            {
                <Characters
                    id={'1'}
                    name={'Rick Sanchez'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
                    alt={'Rick'}
                />
            }
            {
                <Characters
                    id={'2'}
                    name={'Morty Smith'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
                    alt={'Morty'}
                />
            }
            {
                <Characters
                    id={'3'}
                    name={'Summer Smith'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Female'}
                    image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
                    alt={'SSummer'}
                />
            }
            {
                <Characters
                    id={'4'}
                    name={'Beth Smith'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Female'}
                    image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
                    alt={'Beth'}
                />
            }
            {
                <Characters
                    id={'5'}
                    name={'Jerry Smith'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
                    alt={'Jerry'}
                />
            }
            {
                <Characters
                    id={'6'}
                    name={'Abadango Cluster Princess'}
                    status={'Alive'}
                    species={'Alien'}
                    gender={'Female'}
                    image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
                    alt={'Abadango'}
                />
            }
        </div>
    );
}

export default App;