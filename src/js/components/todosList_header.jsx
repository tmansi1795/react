import React from 'react';
export default class TodoListHeader extends React.Component{
     render(){
         return(
             <thead>
                         <tr>
                             <th>status</th>
                             
                             <th>task</th>
                             <th>action</th>
                         </tr>
                     </thead>
         )
     }
 }
