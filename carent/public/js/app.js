import dinamic from "./dinamic.js";
import prodcuts from "./prodcutsview.js";


// DOMContentLoaded html web
document.addEventListener("DOMContentLoaded", () => {
  const data =  dinamic.axios();
  dinamic.dataCar(data);
  dinamic.slider();
  prodcuts.Heartbtn();
  prodcuts.setupe();
  prodcuts.PriecItems();
  prodcuts.setPriec();
});
