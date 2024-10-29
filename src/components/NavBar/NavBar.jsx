import logo from '../../assets/FuarkWings.svg';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <a className='nav-icon' href='/'><img src={logo} alt='Fuark Zone Logo' /></a>
            <ul>
                <a href='/'><li className='nav-text'>About  </li></a>
                <a href='/'><li className='nav-text'>Contact</li></a>
            </ul>
        </nav>
    );
}
