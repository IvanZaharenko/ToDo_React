import {Component} from "react/cjs/react.production.min";
import React from 'react';
import classes from './Status_tasks.module.css';

class Status_tasks extends Component {
    render() {
        return (
            <div className={classes.btn}>
                <ul>
                    <li>
                        <a className={`allTasks ${classes.active}`} href="#">All</a></li>
                    <li>
                        <a className="activeTasks" href="#">Active</a></li>
                    <li>
                        <a className="completedTasks" href="#">Done</a></li>
                </ul>
            </div>

        )
    }
}

export default Status_tasks

