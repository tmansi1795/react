import React from 'react';
import _ from 'lodash';
import TodoListHeader from './todosList_header.jsx';
import TodoListItem from './todoList_Item.jsx';
 export default class TodoList extends React.Component{
     
      renderItems(){
        console.log("todolist props::",this.props); 
          return this.props.todos .map((todo,index)=> <TodoListItem key={index} {...todo} save={this.props.saveChange} delete={this.props.DelectTask} toggle={this.props.checkedbox} />)
      }
     render(){
        // console.log(this.props.Todos);
        
         return(
             
                 <table>
                     <TodoListHeader/>
                     <tbody>
                         {this.renderItems()}
                     </tbody>
                 </table>
             
         )
     }
 }