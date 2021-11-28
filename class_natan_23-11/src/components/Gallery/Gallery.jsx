import React, { Component } from "react";
import OneImgGallery from "./OneImgGallery";
import * as style from "./Gallery.module.css";

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      mainPic:
        "https://cdn.pixabay.com/photo/2021/11/13/23/06/tree-6792528__480.jpg",
      index: 0,
    };
  }
  array = [
    "https://cdn.pixabay.com/photo/2021/11/13/23/06/tree-6792528__480.jpg",
    "https://cdn.pixabay.com/photo/2021/11/03/12/28/forest-6765636__480.jpg",
    "https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523__480.jpg",
    "https://media.istockphoto.com/photos/birds-eye-view-summer-scenic-landscape-at-sunset-picture-id803068120?b=1&k=20&m=803068120&s=170667a&w=0&h=l9Bc7qCRUVhXqGlIA5hsrdBf_l9zjpimk6zAoARpaTE=",
    "https://cdn.pixabay.com/photo/2021/11/01/15/52/spring-roll-6760871__480.jpg",
  ];
  changePic = (src) => this.setState({ mainPic: src });
  clickingBtn = (step)=>{
      let temp = this.state.index;
    if(step){
        temp = temp ? temp - 1 :  (this.array.length -1);
        this.setState({mainPic: this.array[temp]});
        this.setState({index:temp})
    }
    else{
        temp = temp == (this.array.length -1) ? 0 : temp + 1
        this.setState({mainPic: this.array[temp]});
        this.setState({index:temp})
    }
  }
  render() {
    return (
      <div>
        <div className={style.mianDiv}>
          <button className={style.prev} onClick={()=>this.clickingBtn(true)}>prev</button>

          <img className={style.mainPic} src={this.state.mainPic} />

          <button className={style.next} onClick={()=>this.clickingBtn(false)}>next</button>

        </div>

        <div className={style.gallery}>
          {this.array.map((item) => (
            <OneImgGallery src={item} changePic={this.changePic} />
          ))}
        </div>
      </div>
    );
  }
}
