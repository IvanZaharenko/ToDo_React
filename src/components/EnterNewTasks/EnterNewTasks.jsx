import {Component} from "react/cjs/react.production.min";
import React from 'react';
import './EnterNewTasks.css';

class EnterNewTasks extends Component {
    render() {
        return (
            <div className="enterTasks">
                <form id="tasksForm" action="#">
                    <label className="control_label_check" htmlFor="newTask">New Task</label>
                    <textarea id="newTask" className="DisainPlaceholder" placeholder='Begin write...'></textarea>
                    <button type="submit" id="addNewTask" className="styleButton">ADD</button>
                </form>
            </div>
        )
    }
}

export default EnterNewTasks

