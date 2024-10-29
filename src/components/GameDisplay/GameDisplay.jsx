import './GameDisplay.css';

export default function GameDisplay() {
    return (
        <div className='game-display'>
            <canvas className='game-canvas'></canvas>
            <div className='game-info'>
                Game Info...
            </div>
        </div>
    );
}
