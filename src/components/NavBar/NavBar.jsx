import logo from '../../assets/FuarkWings.svg';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav className='navbar'>
            <a className='nav-icon' href='/'><img src={logo} alt='Fuark Zone Logo' /></a>
            <ul>
                <li className='nav-text'>About</li>
                <li className='nav-text'>Contact</li>
            </ul>
        </nav>
    );
}
