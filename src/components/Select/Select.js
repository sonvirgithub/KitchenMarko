import React, { useState } from "react";
import "./Select.css"
import { connect } from "react-redux";


function Select({text,arr,clas,classText,polygon}) {

    const [show, setShow] = useState(false);


    return (
  
   

    <div className="plans" >
        <div className={`btn ${clas}`} onClick={() => setShow(!show)}>
        <div className={`plan-text ${classText}`}>{text}</div>

        {
            polygon ? (
<img alt="polygon-white-open" className={`polygon-white-open ${!show ? "close-polygon" : "" }`}
        
        src={require("../../images/polygon-white-open.svg").default}/>
            ) : 
            <img alt="polygon-white-open" className={`polygon-white-open ${!show ? "close-polygon" : "" }`}
        
        src={require("../../images/polygon-black-open.svg").default}/>
        }
        
    </div>
    {
        show && polygon ? (
            <ul>
           <li><input type="checkbox"/>   {arr[0]?.name}</li>
            <li><input type="checkbox"/>   {arr[1]?.name}</li>
             <li><input type="checkbox"/>   {arr[2]?.name}</li>
            <li><input type="checkbox"/>   {arr[3]?.name}</li>
            <li><input type="checkbox"/>   {arr[4]?.name}</li>
        
           </ul>
         

        ) : <></>
    }

   
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
  };
};
export default connect(null, mapDispatchToProps)(Select);
