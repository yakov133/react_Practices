import React from "react";

class InputNameState extends React.Component {
  constructor() {
    super();
    this.state = { name: "" };
  }
  change = (e,key) => {
      this.setState({[key]:e.target.value})

  };

  render() {
    return <div>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" name="name" onBlur={(e)=>this.change(e,"name")} id="name" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {this.state.name}
    </div>;
  }
}

export default InputNameState;
