import React from 'react'


const TaskesFooter = ({tasksCompleted}) => {
        return(<div className="footer">
        <span className="tCompleted">{tasksCompleted} Tasks Completeds</span>
        
      </div>)
    }



export default TaskesFooter;