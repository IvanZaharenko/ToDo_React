import {Component} from "react";
import './ListTasks.css';
import Task from "./Task/Task";

class ListTasks extends Component {
    
    render() {
        const {store} = this.props;
         return (
            <div className="listToDo" >
                {
                    this.props.tasks.map(task => (
                        <Task
                            key = {task.id}
                            store={task}
                            clickDoneTask={this.props.clickDoneTask}
                            hoverHiddenElement={this.props.hoverHiddenElement}
                            hoverVisibleElement = {this.props.hoverVisibleElement}
                            handleDeleteTask={this.props.handleDeleteTask}
                            clickImportantTask={this.props.clickImportantTask}
                            
                        />)
                    )
                    }
            </div>
        )
    }
}

export default ListTasks

/*
<Task importantly={this.props.store[0].importantly} done={this.props.store[0].done} content={this.props.store[0].content}/>
*/
