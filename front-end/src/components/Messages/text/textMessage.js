import React, { Component } from "react";
import { Col,Row } from "react-bootstrap";
import "./messages.scss";

class TextMessage extends Component {
    constructor(props){
        super(props);

        const state = {
        message:''
        };
    }
  render() {
    return (
    <div>
        <div className="user-icon"><img src="{state.img}"   className="roundup-profile" alt="{state.username}"/>
        </div>
        <Col >
        
        </Col>
    </div>
        );
  }
}

export default TextMessage;
