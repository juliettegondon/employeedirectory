import React from "react";
import './Wrapper.css'

function Wrapper(props) {
    return <main key = "uniqueid2"className="wrapper">{props.children}</main>;
  }

export default Wrapper;