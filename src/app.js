import "./style/index.scss";
import { getUserData } from "./js/getUserData";
import { getEducationData } from "./js/getEducationData";

const renderHTML = () => {
  getUserData();
  getEducationData();
};

// TODO feedback: 直接调用方法就可以
window.onload = renderHTML();
