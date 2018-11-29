import React , { Component } from 'react';

class ViewAddTask extends Component{
    constructor(props){
        super(props)
        this.state ={
            open :this.props.open,
            validInput :false,
            newTask :{
                time :'',
                title:''
            }
        }
        this.toggle = this.toggle.bind(this)
        this.onChangneHandelerTime = this.onChangneHandelerTime.bind(this)
        this.onChangneHandelerTitle = this.onChangneHandelerTitle.bind(this)
    
    }
    toggle = () =>{
       
        this.setState({open:!this.state.open})
        this.clearInput()
        this.props.onClose()
    }
   
    componentWillReceiveProps({open}){
        this.setState({open})
    }
    onChangneHandelerTime(e){
    
        let time = e.target.value
        let newTask = {...this.state.newTask,time}
        this.setState({newTask})
        this.verifyInput()
    }
    onChangneHandelerTitle(e){
        let title = e.target.value
        let newTask = {...this.state.newTask,title}
        this.setState({newTask})  
        this.verifyInput() 
    }
    clearInput = () =>{
        let newTask={time:'',title:''}
        this.setState({newTask,validInput:false})
        
       
    }
    verifyInput =()=>{
        let newTask = this.state.newTask;
        if(newTask.time.length > 0 && newTask.title.length > 0){
           this.setState({validInput:true})
         }else{
            this.setState({validInput:false})
         }
 
    }
    handleOnAddTask = () =>{
        
        this.props.onAddTask(this.state.newTask)
        this.clearInput()
       
    }

    render(){
        const newTask = this.state.newTask
        return( 
              <div className="modal-top-container">
            
            {this.state.open &&    <div className="container-modal">
                    <div className="modal">
                  
                        <div className="modal-header">
                            Add Task
                            <button onClick={this.toggle} className="modal-close">x</button>
                        </div>
                        <div className="modal-body">
                            <input 
                              value = {newTask.time}
                              onChange={(e) => this.onChangneHandelerTime(e)}
                              type="time" />
                            <input  value = {newTask.title}
                              onChange={(e) => this.onChangneHandelerTitle(e)}
                              type="text" placeholder="Name ..."/>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary"
                            onClick={this.handleOnAddTask }
                            disabled ={!this.state.validInput}
                            > 
                            Add Task</button>
                            <button className="btn btn-danger"
                            onClick={this.toggle}>
                            Cancel</button>
                        </div>
                    </div>
                </div>} 
                
                </div>
        )
    }
    

}

export default ViewAddTask;
