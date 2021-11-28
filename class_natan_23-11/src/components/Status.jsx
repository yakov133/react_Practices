import React from "react";
import StatusMaker from "./StatusMaker";

class Status extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [
        { title: "wash the dog", status: false },
        { title: "wash the car", status: true },
        { title: "go on a trip", status: true },
      ],
      
    };
  }
  title=""
  status=""
  updateLocalStorge = () => {

  };

  updateState= (e)=>{
    e.preventDefault();
    let tempArr = [...this.state.arr];
    tempArr.push({
        title: this.title,
        status :this.status,
    })
    this.setState({arr:tempArr})

  }

  removeByIndex =(index)=>{
    let tempArr = [...this.state.arr];
    tempArr.splice(index,1)
    this.setState({arr:tempArr})
  }
  
  render() {
    this.updateLocalStorge();
    return <div>
        <div>
            <form onSubmit={this.updateState}>
            {/* onChange={(e)=>this.setState({title : e.target.value})} */}
                <input type="text" placeholder="wirte a title"  onChange={(e)=> this.title = e.target.value} required />
                <br />
                <br />
                <input type="text"  placeholder="wirte a status" onChange={(e)=> this.status = e.target.value} required/>
                <br />
                <button type="submit"> clicke me!</button>
            </form>
            {this.state.arr.map((item,index)=> (<StatusMaker item={item} removeByIndex={this.removeByIndex} index={index}/>) )}
        </div>

    </div>;
  }
}
export default Status;
