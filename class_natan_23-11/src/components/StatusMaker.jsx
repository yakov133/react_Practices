import React from "react";

class StatusMaker extends React.Component{
    constructor(){
        super()
    }


    render(){
        
        
        return <div  >
            <p onClick={()=>this.props.removeByIndex(this.props.index)} > X </p>
           <div style={{backgroundColor:`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`}}   >
           <p>{this.props.item.title}</p>
            <p>{this.props.item.status? "true" : "false"}</p>
            <hr />
           </div>
        </div>
    }
}
export default StatusMaker;