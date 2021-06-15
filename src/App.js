import './App.css';
import Header from "./components/Header/Header";
import Status_tasks from "./components/Status_tascs/Status_tasks";
import EnterNewTasks from "./components/EnterNewTasks/EnterNewTasks";
import ListTasks from "./components/ListTasks/ListTasks";
import {Component} from "react";


class App extends Component {
    state = {
        store: [
            {content: 'Попить чайку', done: true, importantly: false, id: 0},
            {content: 'Прочитать, что такое JAVASCRIPT', done: false, importantly: true, id: 1},
            {content: 'Отправить тестовое задание на курсы SENLA до 1 марта', done: false, importantly: true, id: 2},
            {content: 'Записаться на курсы по REACT JS от SENLA', done: false, importantly: false, id: 3},
            {content: 'Проснуться', done: true, importantly: false, id: 4},
        ]
    };

    handleDeleteTask = (id) => {

        this.setState(({store}) => ({
        store:store.filter( task => task.id !== id)
        }))
    };

    render() {
        return (
            <div className="App">
                <div className="wrapContent">
                    <header className="header_ToDo">
                        <Header/>
                    </header>
                    <main>
                        <Status_tasks/>
                        <EnterNewTasks/>
                        <ListTasks
                            store={this.state.store}
                            handleDeleteTask={this.handleDeleteTask}
                        />
                    </main>
                </div>
            </div>
        );
    }
}

export default App;
