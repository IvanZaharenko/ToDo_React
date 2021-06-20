import './App.css';
import './AppAdaptability.css';
import Header from "./components/Header/Header";
import StatusTasks from "./components/StatusTasks/StatusTasks";
import EnterNewTasks from "./components/EnterNewTasks/EnterNewTasks";
import ListTasks from "./components/ListTasks/ListTasks";
import React, {Component} from "react";
import { nanoid } from 'nanoid'

class App extends Component {

    state = {
        store: [
            this.createTask('Попить чайку'),
            this.createTask('Прочитать, что такое JAVASCRIPT'),
            this.createTask('Отправить тестовое задание на курсы SENLA до 1 марта'),
            {content: 'Записаться на курсы по REACT JS от SENLA', done: true, importantly: false, id: nanoid(5), hover: false},
            {content: 'Проснуться', done: true, importantly: true, id: nanoid(5), hover: false},
        ],
        term: '',
        statusTasks: 'all'
    };

    createTask(textTask) {
        return{
            content: textTask,
            done: false,
            importantly: false,
            id: nanoid(5)
        }
    };

    toggleProperty (arr, id, property) {
        const idx = arr.findIndex(el => el.id === id);
        const oldTask = arr[idx]
        const newTask = {...oldTask, [property]: !oldTask[property]}
        const newArr = [
            ...arr.slice(0,idx),
            newTask,
            ...arr.slice(idx + 1)
        ];
        localStorage.setItem('store', JSON.stringify(newArr))
        return newArr
    };

    handleDeleteTask = (id) => {
        const newArr = this.state.store.filter( task => task.id !== id)
        localStorage.setItem('store', JSON.stringify(newArr))

        this.setState(() => ({
        store:newArr
        }))  
     };

     handleAddedTask = (text) => {
        const newTask = this.createTask(text)

        this.setState( ( { store } ) => {
            const newArr = [
                newTask,
                ...store
            ];

            localStorage.setItem('store', JSON.stringify(newArr))
            return {
                store: newArr
            }
        })
     };

    clickDoneTask = (id) => {
        this.setState(({store}) => {
            return {
                store: this.toggleProperty(store, id, 'done')
            }
        })
    };

    clickImportantTask = id => {
        this.setState(({store}) => {
            return{
                store: this.toggleProperty(store, id, 'importantly')
            }
        })
    };

    search(tasks, search) {
        if (search.length === 0) return tasks

       return tasks.filter((task)=> {
            return task.content
                .toLowerCase()
                .indexOf(search.toLowerCase()) > -1
        })
    };

    onSearchChange = (term) => {
        this.setState({ term })
    };
    statusChange = (statusTasks) => {
        this.setState({ statusTasks })
    }

    filterStatusTasks(tasks, status) {
        switch(status) {
            case 'all':
                return tasks;
            case 'active':
                return tasks.filter((task) => !task.done );
            case 'done' :
                return tasks.filter( task => task.done );
            default:
                return tasks;
        }
    }
    componentDidMount(){
         const newStore = JSON.parse(localStorage.getItem('store'));
         if (localStorage.store){
             this.setState(({store})=>{    
                return{
                    store: newStore
                }
             } )
         }
     }

    render() {
        const {store, term, statusTasks} = this.state;

        const visibleTasks = this.filterStatusTasks(
            this.search(store, term), statusTasks) ;

        return (
            <div className="App">
                <div className="wrapContent">
                        <Header
                        onSearchChange={this.onSearchChange}
                        />
                     <main>
                        <StatusTasks
                            statusTasks={statusTasks}
                            statusChange={this.statusChange}
                        />
                        <EnterNewTasks
                           handleAddedTask = { this.handleAddedTask } 
                        />
                        <ListTasks
                            tasks = {visibleTasks}
                            store={this.state.store}
                            clickDoneTask = {this.clickDoneTask}
                            handleDeleteTask = {this.handleDeleteTask}
                            clickImportantTask = {this.clickImportantTask}
                        />
                    </main>
                </div>
            </div>
        );
    }
}

export default App;
