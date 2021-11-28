import React from "react";

class OneImgGallery extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>
            <img src={this.props.src}  onClick={(e)=>this.props.changePic(e.target.src)}/>
    </div>;
  }
}
export default OneImgGallery;