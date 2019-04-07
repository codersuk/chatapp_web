import React, { Component } from "react";
import { Nav } from "react-bootstrap";
class Channels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    //   pull data from Axios
    
    this.setState({
      list: [
        {
          id: 123,
          name: "Channel" + this.props.id
        },
        {
          id: 123,
          name: "hello"
        }
      ]
    });
  }
  render() {
    var returnData = this.state.list.map(function(data){
        return (<Nav.Link>{data.name}</Nav.Link>)
    });
    return returnData;
  }
}

export default Channels;
