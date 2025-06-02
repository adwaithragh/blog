import react from 'react';
import { Link } from 'react-router';
import '../styles/Header.css'

const Header = () => {
    return(
        <header>
            <h1>My Blogs</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/addBlog'>Add Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;