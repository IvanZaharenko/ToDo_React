import React,  {Component} from 'react';
import './Header.css';
import logo from '../../content/images/Color.png'

class Header extends Component {
    state = {
        term: ''
    }

    onSearchChange = (event) => {
        const term = event.target.value
        this.setState({ term })
        
        this.props.onSearchChange(term)
    }
    enterKeyDown = (event) => {
        if (event.keyCode === 13)  event.preventDefault()
    }
    render() {
        return (<header className="header_ToDo">
                    <img 
                        className="logo" 
                        src={logo}  
                        alt="SENLA" 
                        title="logo company SENLA"/>
                            <form  action="#" id="serchForm">
                                <input 
                                    onKeyDown = {this.enterKeyDown}
                                    type="text" 
                                    id="searchTasks" 
                                    placeholder="Search task for to do"
                                    value = {this.state.term}
                                    onChange = {this.onSearchChange}
                                    />
                            </form>
                </header>
        )
    }
}

export default Header

