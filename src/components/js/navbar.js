import { Link, useLocation } from 'wouter';
import '../css/navbar.css';

function Navbar() {
    const [location] = useLocation();

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/" className={location === '/' ? 'active' : ''}>Home</Link>
                </li>
                <li>
                    <Link href="/about" className={location === '/about' ? 'active' : ''}>About</Link>
                </li>
                <li>
                    <Link href="/projects" className={location === '/projects' ? 'active' : ''}>Projects</Link>
                </li>
                <li>
                    <Link href="/contact" className={location === '/contact' ? 'active' : ''}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
