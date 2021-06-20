import React, {Component}  from 'react';
import './EnterNewTasks.css';

export default class EnterNewTasks extends Component {

    state = {
        value: ''
    }

    onLabelChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    
    addedTask = (event) => {    
        event.preventDefault()

        if (this.state.value.length === 0) return
        this.props.handleAddedTask(this.state.value)
        this.setState ({
            value: ''
        })
    }

    enterKeyDown = (event) => {
        if (event.keyCode !== 13 || this.state.value.length === 0) return

        event.preventDefault()
        this.props.handleAddedTask(this.state.value)
        this.setState ({
            value: ''
        })
    }

    render() {
        return (
            <div className="enterTasks">
                <form 
                    id="tasksForm" 
                    action="#"
                >
                    <label className="control_label_check" htmlFor="newTask">New Task</label>
                    <textarea 
                        id="newTask" 
                        className="DisainPlaceholder" 
                        placeholder='Begin write...'
                        onChange= {this.onLabelChange}
                        onKeyDown = {this.enterKeyDown}
                        value = {this.state.value}
                    >

                    </textarea>
                    <button 
                        type="submit" 
                        id="addNewTask" 
                        className={`${this.state.value.length === 0 ? 'disabled' : ''}`}
                        onClick = { this.addedTask}
                    >
                        ADD
                    </button>
                </form>
            </div>
        )
    }
}