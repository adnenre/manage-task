import React ,{ Component }from 'react'
import Tasks from './Tasks'



class TaskesBody extends Component{
      
      render(){
        return <Tasks 
        data={this.props.tasks}
        onDelete={(id) => this.props.onDelete(id)}
        onEdit={(id) => this.props.onEdit(id)}
        onComplete={(id)=>this.props.onComplete(id)}
        /> 
      }
    }

export default TaskesBody;