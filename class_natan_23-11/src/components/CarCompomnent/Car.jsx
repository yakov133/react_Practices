import React from "react";
import * as style from "./car.module.css"
class Car extends React.Component{
    

    render(){

        return<div className={style.card}>  
            <p>MODEL : {this.props.car.model}</p>
            <p>Price : {this.props.car.price}</p>
            <img src={this.props.car.pic}/>
        </div>
    }
}
export default Car;