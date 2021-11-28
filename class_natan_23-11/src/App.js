import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import InputClass from "./components/InputClass";
import GetPosts from "./components/GetPosts";
import GetFromJsonPlaceHolder from "./components/GetFromJsonPlaceHolder";
import InputNameState from "./components/InputNameState";
import Car from "./components/CarCompomnent/Car";
import Movie from "./components/Movie/Movie";
import Cars from "./components/CarCompomnent/Cars";
import Gallery from "./components/Gallery/Gallery";
import Status from "./components/Status";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Input />
        <br />
        <br />
        <InputClass /> */}

        {/* <GetPosts /> */}

        {/* <InputNameState /> */}
        {/* <Car car = { { model:"B.M.W",price:14000,pic:"https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343__480.jpg" } }/> */}
        {/* <Movie movie = { { name:"007",year:2021,actor:"James Bond" } }/> */}
        {/* <Cars /> */}

        {/* <GetFromJsonPlaceHolder /> */}
        <Status />
        {/* <Gallery /> */}


      </div>
    );
  }
}

export default App;
