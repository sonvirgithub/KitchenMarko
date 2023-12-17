import React from "react";
import "./SecondScreen.css"
import { connect } from "react-redux";


function SecondScreen() {
  return (
   <div className="advantages-full">
   <img alt="kitchen1-img" className="kitchen1-img" src={require("../../images/kitchen1-img.png")}/>
   <div className="advantages">
    <div className="adv-line">
    <p className="advantages-txt">Наши преимущества</p>
    <div className="line-adv"></div>
   </div>

  <div className="components">
   <div className="adv-comp1">
    <img alt="kitchen-icon" className="kitchen-icon" src={require("../../images/kitchen-icon.svg").default}/>
    <div className="adv-comp1-txt">
    <p className="txt1">C 2000 г на рынке </p>
    <p className="txt2">наши кухни выбрали</p>
    <p className="txt2">10 000+ семей</p>
    </div>
   </div>


   <div className="adv-comp1">
    <img alt="deadline-icon" className="kitchen-icon" src={require("../../images/deadline-icon.svg").default}/>
    <div className="adv-comp1-txt">
    <p className="txt1">Сжатые сроки </p>
    <p className="txt2">изготовление кухни</p>
    <p className="txt2">от 20 дней</p>
    </div>
    </div>

    <div className="adv-comp1">
    <img alt="design-project-icon" className="kitchen-icon" src={require("../../images/design-project-icon.svg").default}/>
    <div className="adv-comp1-txt">
    <p className="txt1">Дизайн проект </p>
    <p className="txt2"> бесплатно за 30 минут  </p>
    </div>
   </div>


</div>
</div>
   </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
  };
};
export default connect(null, mapDispatchToProps)(SecondScreen);
