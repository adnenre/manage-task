import React ,{ Component }from 'react'
import Author from '../uiElements/Author'
import info from '../info'

const TaskesHeader = (props) =>{
        return(  
        <div className="header-container">
        <Author info={info} />
            <div className="triangle">
            <span className="t-text">My Tasks</span>
       </div>
       
       <button className="btn-add-task" onClick={props.onClick}>+</button>
     </div>)
   

}

export default TaskesHeader;