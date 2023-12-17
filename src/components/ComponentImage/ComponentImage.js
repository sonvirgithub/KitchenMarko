import React from "react";
import "./ComponentImage.css"
import { connect } from "react-redux";


function ComponentImage({text,clas}) {
  return (
   <div className={clas}>
    <div className="comp-img-txt">{text}</div>
    <img alt="=" src={require("../../images/ellipse.svg").default} className="ellipse"/>
   </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
  };
};
export default connect(null, mapDispatchToProps)(ComponentImage);
