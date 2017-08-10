import React from 'react';
import InputField from './index.jsx';
// import SubmitBtn from './button.jsx';
import _ from 'lodash';
import TodoList from './TodosList.jsx';
const Todos = [
    {
        task: 'make React TodoList App',
        isCompleted: true
    },
    {
        task: 'creat react strater App',
        isCompleted: true
    },
    {
        task: 'creat react SAP App',
        isCompleted: false
    }
]
class Apps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Todos
        };
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.getDataFromInput = this.getDataFromInput.bind(this);
    }
    componentDidMount() {
        console.log("componentDidMount::", this.state);
    }
    componentDidUpdate() {
        console.log("componentWillUpdate::", this.state);
    }
    // handleSubmit(event) {
    //     console.log('entered handleSubmit');
    //     event.preventDefault;
    //     console.log(JSON.stringify(this.state));
    //     alert(JSON.stringify(this.state));


    // }
    getDataFromInput(task) {
        //console.log("entered getDataFromInput :", name, obj);
        console.log("beforechab=ngestate",this.state.Todos)
        if (task) {
            // stateList=obj;
            // console.log(stateList);
            this.state.Todos.push({
                task,
                isCompleted:false
            })
            
            this.setState({Todos:this.state.Todos});
            console.log("After changeState",this.state);
        }
    }
    saveChange(oldTask,newTask){
        console.log("entered saveChage func");
        const found= this.state.Todos.find( todo=> todo.task===oldTask);
        found.task=newTask;
        this.setState({Todos:this.state.Todos});
    }
    DelectTask(task){
       _.remove( this.state.Todos, todo=> todo.task===task);
        this.setState({Todos:this.state.Todos});
    }
    checkedbox(task){
        console.log("beforecheckbox::",task);
     const foundtask= _.find( this.state.Todos,todo=> todo.task===task);
     console.log("found::",foundtask);
foundtask.isCompleted=!foundtask.isCompleted;
this.setState({Todos:this.state.Todos});
 console.log("afterchecked::",this.state);  
    }
    render() {
        return (
            <div>

                toDoInput: <InputField type="text" name="toDoInput" placeholder="enter your todo work...." getData={this.getDataFromInput} />
                
                <TodoList todos={this.state.Todos} saveChange={this.saveChange.bind(this)} DelectTask={this.DelectTask.bind(this)}
                checkedbox={this.checkedbox.bind(this)}/>
        
            </div>

        );
    }
}
export default Apps;