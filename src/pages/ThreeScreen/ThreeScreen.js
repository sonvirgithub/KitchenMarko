import React, { useState } from "react";
import "./ThreeScreen.css"
import { connect } from "react-redux";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import FourScreen from "../FourScreen/FourScreen";


function ThreeScreen() {

    const [show, setShow] = useState(false);
    const items= [{id:1, name:"Прямые100"},{id:2, name:"Угловые134"},{id:3, name:"С островом250"},
    {id:4, name:"Трёхъярусные120"},{id:5, name:"П-образные170"}]


    return (
   <div className="works">
    <div className="ln-work-txt">
    <div className="line-work"></div>
    <p className="works-txt">Посмотрите наши работы</p>
    </div>
   <div className="selct-btns">
   <div className="selects">
    <Select text="ПЛАНИРОВКА" arr={items} clas="btn-plan" classText="" polygon={true}/>
    <Select text="CТИЛЬ КУХНИ" arr={[]} clas="btn-style" classText="class-text" polygon={false}/>
    <Select text="ЦВЕТ" arr={[]} clas="btn-color" classText="class-text" polygon={false}/>

  </div>
     <div className="app-throw-btns">
     <Button text="ПРИМЕНИТЬ" clas="apply-btn"/>
     <Button text="СБРОСИТЬ" clas="throw-off-btn"/>

     </div>
</div>
   </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
  };
};
export default connect(null, mapDispatchToProps)(ThreeScreen);
