import React from 'react'


const Author = ({info}) => {
   
    return(
      <div className="header">
     <img src={info.img} alt="" />
        <div className="info">
            <h3>{info.name} {info.lastName}</h3>
            <span>{info.job}</span>
        </div>
  </div>
    )
}

export default Author