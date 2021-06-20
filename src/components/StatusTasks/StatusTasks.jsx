import React, {Component} from 'react';
import classes from './StatusTasks.module.css';

export default class StatusTasks extends Component {

    buttons = [
        {name : 'all', lable: 'All'},
        {name : 'active', lable: 'Active'},
        {name : 'done', lable: 'Done'},
    ]

    render() {
        const {statusTasks, statusChange} = this.props

        const buttons = this.buttons.map(({ name, lable }) => {
            const active = statusTasks === name

            return(
                <li key={name} >
                    <a 
                     className={ active ? `${classes.active}` : ''}
                        href="#"  
                        key={lable}
                        onClick={() => statusChange(name)}
                        >
                        {lable}
                        </a>
                </li>
            );
        })

        return (
            <div className={classes.btn}>
                <ul>
                    {buttons}
                </ul>
            </div>

        )
    }
}
