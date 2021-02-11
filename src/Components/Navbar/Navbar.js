import { Component } from 'react';
import './Navbar.css';
import MyAuth from "../../Components/Authentication/MyAuth";

class Navbar extends Component {

    render(props) {
        return(            
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Login Demo</h1>
                <ul className="navbar-list">
                    <li><a className="nav-links" href="/">Home</a></li>
                    <li><a className="nav-links" href="">Product</a></li>
                    <li><a className="nav-links" href="">Help</a></li>
                    <li><a className="nav-links-special" onClick={this.props.changer}> Account </a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;