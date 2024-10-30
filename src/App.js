import './App.css'

import NavBar from "./components/NavBar/NavBar";
import GameDisplay from "./components/GameDisplay/GameDisplay";

function App() {
    return (
        <div className="App">
            <header>
                <NavBar />
            </header>
            <body>
                <GameDisplay className='game-display' />
            </body>
        </div>
    );
}

export default App;
