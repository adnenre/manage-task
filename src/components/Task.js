import React ,{Component} from 'react';
import ToggleControlBtn from './ToggleControlBtn'
class Task extends Component{
    constructor(props){
        super(props)
        this.state ={
            showControle:false
        }
    }
    ShowControle=()=>{
        this.setState({showControle:true})
        console.log('mouseenter')
    }
    hideControle =()=>{
        this.setState({showControle:false})
    }
    render(){
         const taskCompleted = !this.props.completed?'':'active';
        return(
            <div  className={"activity-container ".concat(taskCompleted) } 
            onMouseLeave={this.hideControle}
            
            >
            <div className="activity-data inline">
                <span>{this.props.time}</span>
                <h3 className="a-text">{this.props.title} </h3>
            </div>
            <ToggleControlBtn 
            onDelete={this.props.onDelete}
            onEdit={this.props.onEdit}
            onComplete ={this.props.onComplete}
            toggleControle={this.ShowControle} 
            controleState={this.state.showControle}/>
       </div>
        )
    }
}

export default Task;