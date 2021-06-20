import {Component} from "react";
import React from 'react';
import './Task.css';
import del from './../../../content/images/Delete.png'


class Task extends Component {
    constructor(){
        super();
        this.state = {
            isHovered: false
        } 
        this.handleHover = this.handleHover.bind(this);
    }
    handleHover(){
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    deleteTask = (id, event) => {
        event.stopPropagation()
        this.props.handleDeleteTask(id)
    };
    importantTask = (id, event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.clickImportantTask(id)
    }
    doneTask = id => this.props.clickDoneTask(id);

    render() {
        const { content, done, importantly, id, hover } = this.props.store;
        return (
            <div 
                key= {id} 
                id = {id} 
                className = 'listElem' 
                tabIndex = "0"
                onMouseOver = {this.handleHover} 
                onMouseOut = {this.handleHover}
                onClick = {() => this.doneTask(id)}
            >
                <span 
                    className={`${importantly ? 'star_visible star' : 'star'} ${done ? 'done': ''}`}
                >☆
                </span>
                <p 
                    className={`${importantly ? 'bold_Task' : ''} ${done ? 'done' : ''}`}
                >
                    {content}
                </p>
                <a 
                    className={`${importantly ? 'mark_tagged mark' : 'mark'} 
                            ${this.state.isHovered ? 'visable' : ''} `}
                    tabIndex='0' 
                    href="#" 
                    onClick={(event) => this.importantTask(id,event)}
                >
                    {importantly ? 'NOT IMPORTANT' : 'MARK IMPORTANT'}
                </a>
               <button 
                    onClick={(event) => this.deleteTask(id, event)} 
                    type="button" 
                    className={`${this.state.isHovered ? 'visable deleteTask' : 'deleteTask'}`}> 
                        <img  src={del} alt="Удаление"/>
                </button>
            </div>
        )
    }
}

export default Task

