import React from "react";
import {  Route, Router} from "react-router-dom";
import { connect } from "react-redux";
import Header from "./layouts/components/Header";
import FirstScreen from "./pages/FirstScreen/FirstScreen";
import SecondScreen from "./pages/SecondScreen/SecondScreen";
import ThreeScreen from "./pages/ThreeScreen/ThreeScreen"
import FourScreen from "./pages/FourScreen/FourScreen";

function Routes() {
  return (
    <>
    <Header/>
    <FirstScreen/>
    <SecondScreen/>
    <ThreeScreen />
    <FourScreen/>
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
  };
};
export default connect(null, mapDispatchToProps)(Routes);
