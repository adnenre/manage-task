import React ,{Component}from 'react'
import Task from './Task';

class Tasks extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
       const data = this.props.data
      
        return(
            <div>
                {
                  data.map((el) => <Task
                                    key={el.id}
                                    title={el.title}
                                    time={el.time}
                                    completed={el.completed} 
                                    onDelete={() => this.props.onDelete(el.id)}
                                    onEdit={() =>this.props.onEdit(el.id)}
                                    onComplete={() =>this.props.onComplete(el.id)}
                                />
                           )    
                }
            </div>
        )
    }
} 

export default Tasks;