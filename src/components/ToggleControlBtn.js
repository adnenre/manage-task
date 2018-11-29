import React ,{Component}from 'react'


const ToggleControlBtn =(props) =>{
        return(
         <div className="activity-controle inline">
          <div className="controle">
                {props.controleState &&  <div  className="operator">
                        <button onClick={props.onEdit} className="c-icon-op tl edit"><i className="fa fa-pencil"></i></button>
                        <button onClick={props.onComplete} className="c-icon-op check"><i  className="fa fa-check"></i></button>
                        <button onClick={props.onDelete} className="c-icon-op tl delete"><i  className="fa fa-trash-o"></i></button>
            
                </div>}
           <button onMouseEnter={props.toggleControle}  className="c-icon"><i className="fa fa-cog"></i></button>
           
           
        </div>
       </div>
        )
     
} 

export default ToggleControlBtn