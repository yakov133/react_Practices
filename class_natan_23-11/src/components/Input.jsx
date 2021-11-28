import { useState } from 'react';


function Input(){
    const [state, setstate] = useState({input1:"",input2:""});
    const [color, setcolor] = useState({color1:"",color2:""})
    
    function checkColor(colorId){
        if(colorId == "color1"){
            if(state.input1.length <5){
                setcolor({color1:"red",color2:color.color2})
            }else{
                setcolor({color1:"",color2:color.color2})
            }
        }else{
            if(state.input2.length <5){
                setcolor({color1:color.color1,color2:"red"})
            }else{
                setcolor({color1:color.color1,color2:""})
            }
        }

    }
    
return<div>
        <form onSubmit={(e)=>{ 
            e.preventDefault();
            console.log(state);
        }}>
        <label htmlFor="name">Your Name:</label>
        <br />
        <input type="text" style={{backgroundColor:color.color1}} onChange={ event => {
            setstate({input2:state.input2, input1: event.target.value})
            checkColor("color1")
            }}  id="name"/>
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" style={{backgroundColor:color.color2}} onChange={ event => {
            setstate({input1:state.input1,input2: event.target.value})
            checkColor("color2")
            } } id="password"/>
        <br />
        <input type="submit" value="click me!" />
    </form>
    </div>

    // let input1 = 1;
    // let input2 = 1;
    // return<div>
    //     <form onSubmit={(e)=>{
    //         e.preventDefault()
    //         console.log(input1,input2)}}>
    //     <label htmlFor="name">Your Name:</label>
    //     <br />
    //     <input type="text" onChange={ event => {input1 = event.target.value} }  id="name"/>
    //     <br />
    //     <label htmlFor="password">Password:</label>
    //     <br />
    //     <input type="password" onChange={ event => {input2 = event.target.value} } id="password"/>
    //     <br />
    //     <input type="submit" value="click me!" />
    // </form>
    // </div>
}
export default Input;