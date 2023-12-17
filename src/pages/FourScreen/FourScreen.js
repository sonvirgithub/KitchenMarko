import React from "react";
import "./FourScreen.css"
import { connect } from "react-redux";
import Button from "../../components/Button/Button";


function FourScreen() {
  return (
  <div className="kitchen-min">
    <div className="kitchen-min-comp1">
        <div className="img-slider">
        <img alt="img-min" src={require("../../images/kitchen-min-img.png")} className="img-min"/>
        <div className="slider-img-div">
        <img alt="slider-menu-img" src={require("../../images/slider-menu.png")} className="slider-menu-img"/>
        </div>
        </div>
       </div>
        <div className="kitchen-min-comp2">
            <div>
        <div className="kitchen-min-title">Кухня 097 минимализм </div>
        <div className="corner-kitchen"> Угловая белая кухня со столешницей под бетон.</div>
        </div >
        
        <div className="ek-st-pr">
        <div className="ekonom ekonom-border">
        <p className="ek-txt1">Эконом</p>
        <p className="ek-txt2"> 168 000 р.</p>
        </div>

        <div className="ekonom ekonom-border">
        <p className="ek-txt1">Стандарт</p>
        <p className="ek-txt2"> 217 000 р.</p>
        </div>

        <div className="ekonom">
        <p className="ek-txt1">Премиум</p>
        <p className="ek-txt2"> 270 000 р</p>
        </div>
    </div>
<div className="kitchen-length">
<p className="ek-txt1">Длина кухни:</p>
<p className="ek-txt2"> 4900 мм</p> 

</div>
    <div className="more-btns">
    <Button text="ПОДРОБНЕЕ" clas="more-btn"/>
    <Button text="РАСЧЕТ СТОИМОСТИ" clas="cost-calc-btn"/>
    </div>
        </div>

  </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
  };
};
export default connect(null, mapDispatchToProps)(FourScreen);
