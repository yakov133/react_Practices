
import axios from 'axios';


const getPosts=()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(response=>console.log(response.data))
  .catch(err=>console.log(err))

}
function GetPosts() {
  return<div style={{textAlign:"center",padding:"20px"}}>
    <button onClick={getPosts}>clicke me</button>
  </div>
}

export default GetPosts;
