import React, { Component } from 'react'
import logo from './img/logo.jpg'
import './Navbar0.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


class Navbar0 extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <>

                <nav className='fnav'> <img src={logo} height='50' width='70' id='logo' alt='logo' />
                    <div className="menu">

                        <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Activities</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">ContactUs</a></li>
                        </ul>

                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id='bar'
                            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
                    </div>
                </nav>
            </>
        )
    }
}
export default Navbar0;