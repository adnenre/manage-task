
import React  from 'react'

const Notification = (props) =>{
      return(
         
          <div className="notification" {...props}>
              {props.message}
          </div>
      )
  }

export default Notification