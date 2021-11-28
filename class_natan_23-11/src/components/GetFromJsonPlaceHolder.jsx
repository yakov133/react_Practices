import React from "react";
import axios from "axios";

class GetFromJsonPlaceHolder extends React.Component {
  constructor() {
    super();
    this.state = { arr: "", choice: "",result:"" };
  }

  getPage = (e) => {
    e.preventDefault();
    if (this.state.choice) {
      let url = `https://jsonplaceholder.typicode.com/${this.state.choice}`;
      axios
        .get(url)
        .then((response) => {
          this.setState({ arr: response.data });
          this.showResult();
        })
        .catch((err) => console.log(err));
    } else {
      alert("please check your choices!!!");
    }
  };

  showResult = () => {
    // let items = <div>;
    let items =[];
    switch (this.state.choice) {
      case "posts":
          this.state.arr.forEach(elm=>items.push((
        <div style={{backgroundColor:"cornflowerblue"}}>
          <p>userId : ${elm.userId}</p>
          <p>title : ${elm.title}</p>
          <p>body : ${elm.body}</p>
          <br />
          <br />
          </div>
          )));
          

        break;
      case "comments":
        this.state.arr.forEach(elm=>items.push((
          <div style={{backgroundColor:"burlywood"}}>
            <p>postId : ${elm.postId}</p>
            <p>name : ${elm.name}</p>
            <p>email : ${elm.email}</p>   
            <p>body : ${elm.body}</p>
            <br />
            <br />
            </div>
            )));
        break;
      case "albums":
        this.state.arr.forEach(elm=>items.push((
          <div style={{backgroundColor:"darkseagreen"}}>
            <p>userId : ${elm.userId}</p>
            <p>id : ${elm.id}</p>  
            <p>title : ${elm.title}</p>
            <br />
            <br />
            </div>
            )));
        break;
      case "photos":
        this.state.arr.forEach(elm=>items.push((
          <div style={{backgroundColor:"deepskyblue"}}>
           <p>albumId : ${elm.albumId}</p>
            <p>title : ${elm.title}</p>
            <p>url : ${elm.url}</p>   
            <p>thumbnailUrl : ${elm.thumbnailUrl}</p>
            <br />
            <br />
            </div>
            )));
        break;
      case "todos":
        this.state.arr.forEach(elm=>items.push((
          <div style={{backgroundColor:"lightslategray"}}>
            <p>userId : ${elm.userId}</p>
            <p>id : ${elm.id}</p>   
            <p>title : ${elm.title}</p>
            <p>completed : ${elm.completed? "true" : " false"}</p>
            <br />
            <br />
            </div>
            )));
        break;
      case "users":
        this.state.arr.forEach(elm=>items.push((
          <div style={{backgroundColor:"yellow"}}>
            <p>name : ${elm.name}</p>
            <p>username : ${elm.username}</p>
            <p>email : ${elm.email}</p>   
            <p>city : ${elm.address.city}</p>   
            <br />
            <br />
            </div>
            )));
        break;  

      default:
        break;
    }
    this.setState({result:items})
    
  };

  render() {
    return (
      <div>
        <form onSubmit={this.getPage}>
          <label for="page">Choose a web page:</label>
          <select
            name="page"
            id="page"
            onChange={(e) => {
              this.setState({ choice: e.target.value });
            }}
          >
            <option></option>
            <option value="posts">Posts</option>
            <option value="comments">Comments</option>
            <option value="albums">Albums</option>
            <option value="photos">Photos</option>
            <option value="todos">Todos</option>
            <option value="users">Users</option>
          </select>

          <br />
          <input type="submit" value="Submit" />
        </form>
        <br />
         {this.state.arr === "" ? "empty" : this.state.result} 
      </div>
    );
  }
}
export default GetFromJsonPlaceHolder;
