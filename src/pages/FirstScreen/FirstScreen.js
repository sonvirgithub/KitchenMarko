import React from "react";
import "./FirstScreen.css"
import { connect } from "react-redux";
import ComponentImage from "../../components/ComponentImage/ComponentImage";


function FirstScreen() {
  return (
   <div className="first-screen-div">
     <img alt="first-screen" className="first-screen" src={require("../../images/kitchen-img.png")}/>
     <ComponentImage text="Огромный выбор  бытовой техники" clas="comp-image1"/>
     <div className="cook-div"> 
     <div className="cook-div"></div>
     <div className="line"></div>
        <div className="cook">Изготовим роскошную  дизайнерскую кухню </div>
     <ComponentImage text="Изысканная гарнитур любого размера" clas="comp-image2"/>
     </div>

     <div className="wallet-div">
        <img alt="wallet-icon" src={require("../../images/wallet.svg").default} className="wallet"/>
        <div className="price">
          <div className="price-txt1">Цена на 12-24% ниже,</div>
        <div className="price-txt2">чем у посредников</div>
        </div>
     </div>
     <ComponentImage text="Выдающиеся  сорта древесины" clas="comp-image3"/>
   <div className="arr-dream">
     <div className="dream-div">
        <div className="dream">Рассчитаем стоимость кухни-мечты</div>
        <div className="order-payment-btn">Заказать расчёт</div>
        
     </div>
     <img alt="arrow-icon" src={require("../../images/arrow.svg").default} className="arrow"/>
   </div>
   </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
  };
};
export default connect(null, mapDispatchToProps)(FirstScreen);
