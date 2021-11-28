import React from "react";


class InputClass extends React.Component{
    constructor(){
        super()
        this.state= {name:"",password:"",color1:"",color2:""}
    }
    

    
    
    checkColor = (colorId)=>{
        if(colorId == "color1"){
            if(this.state.name.length < 5){
                this.setState({color1:"red"})
            }else{
                this.setState({color1:""})
            }
        }else{
            if(this.state.password.length < 5){
                this.setState({color2:"red"})
            }else{
                this.setState({color2:""})
            }
        }

    }

    render(){

        return<div>
        <form onSubmit={(e)=>{ 
            e.preventDefault();
            console.log(this.state.name , this.state.password);
        }}>
        <label htmlFor="name">Your Name:</label>
        <br />
        <input type="text" style={{backgroundColor:this.state.color1}} onChange={ event => {
            this.setState({name:event.target.value})
            this.checkColor("color1")
            }}  id="name"/>
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" style={{backgroundColor:this.state.color2}} onChange={ event => {
            this.setState({password:event.target.value})
            this.checkColor("color2")
            } } id="password"/>
        <br />
        
        <input type="submit" disabled={this.state.name.length <= 3 || this.state.password.length <= 5 ? true : false} value="click me!" />
        
        
        
    </form>
    </div>

    }
}

export default InputClass;