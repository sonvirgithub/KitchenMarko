import React from "react";
import "./header.css";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

function Header({
 
}) {
  
  return (
    <header className="header">
      <div className="display-flex">
      <div >
        <img alt="logo" className="logo"
        src={require("../../../images/logo.svg").default}/>
        </div>
        <div className="location">
          <img alt="location-icon" className="location-icon"
          src={require("../../../images/location-icon.svg").default}/>
        <div className="location-stars">
        <p className="yandex-map">Яндекс Карты</p>
       <div className="stars"> <img alt="stars" src={require("../../../images/stars.svg").default}/><p className="star">5,0</p></div>
        <p className="like">81 отзыв • 100 оценок</p>
        </div>
        </div>
</div>

{/* <div className="display-flex call"> */}
    <div className="address">
      <p className="zakaz">Производство кухонь на заказ</p>
      <p className="add-txt">Анапа, ул. Крылова, д. 27</p>
      </div> 
        <div className="display-flex phone"> 
        <img alt="whatsapp-icon" className="w-t-icon" 
        src={require("../../../images/whatsapp-icon.svg").default}/>
        <img alt="telegram-icon" className="w-t-icon"  src={require("../../../images/telegram-icon.svg").default}/>
        <p className="telephone">+7 (988)-311-77-88</p>
        <div className="order-call">ЗАКАЗАТЬ ЗВОНОК</div>
        {/* </div>   */}
        </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
   
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
