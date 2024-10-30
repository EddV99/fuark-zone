import './GameDisplay.css';

export default function GameDisplay({ className }) {
    return (
        <div className={className}>
            <canvas className='game-canvas'></canvas>
            <div className='game-info'>
                Game Info...
            </div>
        </div>
    );
}
