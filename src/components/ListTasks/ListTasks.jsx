import {Component} from "react";
import './ListTasks.css';
import Task from "./Task/Task";

class ListTasks extends Component {

    render() {
        const {store} = this.props;
        let result = store.map(task => (
                <Task
                    key={store.id}
                    store={task}
                    handleDeleteTask={this.props.handleDeleteTask}
                />
            )
        );
        return (
            <div className="listToDo">
                {result}
            </div>
        )
    }
}

export default ListTasks

/*
<Task importantly={this.props.store[0].importantly} done={this.props.store[0].done} content={this.props.store[0].content}/>
*/
