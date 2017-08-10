import React from 'react';
export default class TodoListItem extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            isEdit: false
        }


    }
    renderTask() {
        if (this.state.isEdit) {
            console.log("enete task");
            return (
                <td>
                    {/*<form onSubmit={this.onSaveClick.bind(this)}>*/}

                    <input type="text" defaultValue={this.props.task} ref="editInput" />
                    {/*</form>*/}
                </td>
            );
        }

        return <td>{this.props.task}</td>
    }
    renderButtons() {
        if (this.state.isEdit) {
            return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onClickCancel.bind(this)}>Cancel</button>
                </td>
            );
        }
        return (

            <td>
                <button onClick={this.onClickEdit.bind(this)}>Edit</button>
                <button onClick={this.onClickDelete.bind(this)}>Delete</button>
            </td>
        )
    }

checkbox(){
    console.log("entered  checkbox");
  const{task,isCompleted}=this.props;
  if(this.props.isCompleted){
      return <td><input type="checkbox"  onClick={  this.props.toggle.bind(this,this.props.task)} ref="checkbox" /></td>
  }
  return <td><input type="checkbox"  onClick={  this.props.toggle.bind(this,this.props.task)} ref="checkbox" /></td>
       
     

    

}

    render() {
        return (

            <tr>
                
                {this.checkbox()}
                {this.renderTask()}
                {this.renderButtons()}

            </tr>

        )
    }
    onClickEdit() {

        this.setState({ isEdit: true });
    }
    onClickCancel() {
        this.setState({ isEdit: false });
    }
    onClickDelete() {
        this.props.delete(this.props.task);
    }
    onSaveClick(event) {
        event.preventDefault();
        console.log("eneteeed savechange");
        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.save(oldTask, newTask);
        this.setState({ isEdit: false });

    }
}
