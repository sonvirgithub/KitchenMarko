import React, { useState } from "react";
import "./Button.css"
import { connect } from "react-redux";


function Button({text,clas}) {



    return (
        <div className={`btn ${clas}`}>{text}</div>
 
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
  };
};
export default connect(null, mapDispatchToProps)(Button);
