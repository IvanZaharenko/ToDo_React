import {Component} from "react/cjs/react.production.min";
import React from 'react';
import './Header.css';
import logo from '../../content/images/Color.png'

class Header extends Component {
    render() {
        return (<>
                <img className="logo" src={logo}  alt="SENLA" title="logo company SENLA"/>
                <form  action="#" id="serchForm">
                    <input type="text" id="searchTasks" placeholder="Search task for to do"/>
                </form>
            </>
        )
    }
}

export default Header

