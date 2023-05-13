import { Link } from 'react-router-dom';
export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/form">Form</Link>
                </li>
                <li>
                    <Link to="/product/1">Product with ID: 1</Link>
                </li>
                <li>
                    <Link to="/product/2">Product with ID: 2</Link>
                </li>
            </ul>
        </nav>
    );
}