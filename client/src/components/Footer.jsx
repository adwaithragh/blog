import react from 'react';
import { Link } from 'react-router';
import '../styles/Footer.css';

const Footer = () => {
    return(
        <footer>
            <p>&copy; 2025 My Blog. All rights reserved.</p>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/addBlog'>Add Blog</Link></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;