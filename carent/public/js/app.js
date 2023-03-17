import dinamic from "./dinamic.js";
import Stroge from "./Stroge.js";

// DOMContentLoaded html web
document.addEventListener("DOMContentLoaded", () => {
  dinamic.dataCar();
  dinamic.slider();
  dinamic.axiost();
  const a = dinamic.created();
  Stroge.setdata(a);
});
