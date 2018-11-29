import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskesHeader from './components/TaskesHeader';

import TaskesFooter from './components/TaskesFooter'
import TaskesBody from './components/TaskesBody';
import ViewAddTask from './components/AddTask';
import tasks from './staticData.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      tasks,
      openModal:false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }
  onDelete(id){
    let tasks = this.state.tasks.filter((el)=> el.id!==id)
    this.setState({tasks})
  }
  onComplete(id){
    let tasks = this.state.tasks
        tasks.map(el => {
          if(el.id === id)
          el.completed =!el.completed
        })
       
    this.setState({tasks})
  }
  AddTask=(newTask)=>{
    let tasksLength = this.state.tasks.length
    let newId = this.state.tasks[tasksLength-1].id + 1;
    let task = { 
      id:newId,
      time:newTask.time,
      title:newTask.title,
      completed:false
    }
    
   if(task.time !== '' && task.title !=''){
      this.setState(prevState => ({tasks:[...prevState.tasks,task]}))
   }else{
     
   }
  
   
  }
  toggleModal(){
   this.setState(prevState => ({openModal:!prevState.openModal}))
  
  }
  render() {
    const modalState = this.state.openModal
    const tasks = this.state.tasks;
    const tasksLength = tasks.length
    const completed = tasks.filter(el =>el.completed).length
    return (
      <div className="container">
        <div className="task-container">
        
        <TaskesHeader onClick={this.toggleModal}/>
       
        <ViewAddTask 
        open={modalState}
        onClose={() => this.toggleModal()}
        onAddTask={(newTask)=>this.AddTask(newTask)}
        />
        
        <TaskesBody 
            tasks={tasks}
            onDelete={(id)=>this.onDelete(id)}
            onEdit={() => console.log('Edit Task')}
            onComplete={(id) =>this.onComplete(id)}
        />
        <TaskesFooter tasksCompleted={ completed +'/'+ tasksLength }/>
        </div>
      </div>
    );
  }
}

export default App;
