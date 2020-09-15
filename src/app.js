import "./style/index.scss";
import { getUserData } from "./js/getUserData";
import { getEducationData } from "./js/getEducationData";

const renderHTML = () => {
  getUserData();
  getEducationData();
};

window.onload = renderHTML();
