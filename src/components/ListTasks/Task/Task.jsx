import {Component} from "react";
import React from 'react';
import './Task.css';
import del from './../../../content/images/Delete.png'


class Task extends Component {


    deleteTask = (id) => {
        this.props.handleDeleteTask(id)
    };

    render() {

        const { content, done, importantly, id } = this.props.store;
        return (
            <div id = {id} className='listElem' tabIndex="0">
                <span className={importantly ? 'star_visible star' : 'star'}>☆</span>
                <p className={importantly ? 'bold_Task' : '' || done ? 'done' : '' }>{content}</p>
                <a className={importantly ? 'mark_tagged mark' : 'mark'} tabIndex='0' href="#">{importantly ? 'NOT IMPORTANT' : 'MARK IMPORTANT'}</a>
               <button onClick={() => this.deleteTask(id)} type='button' className='deleteTask'> <img  src={del} alt="Удаление"/></button>
            </div>
        )
    }
}

export default Task

