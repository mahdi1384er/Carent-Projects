// Caret localHost Stroge
const products = [];
const heart = [];

export default class Stroge {
  // heart products
  static setdata(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  static getdata(id) {
    let getAlldata = JSON.parse(localStorage.getItem("products")) || [];
    return getAlldata.find((e) => e.id === parseInt(id));
  }

  static setCartValue(heart) {
    localStorage.setItem("heart", JSON.stringify(heart));
  }

  static getHeartImtes() {
    return JSON.parse(localStorage.getItem("heart"));
  }

  // total priecs products
  static setDataPriec(priecs) {
    localStorage.setItem("priecs" , JSON.stringify(priecs));
  }

  static getdataPriec(id) {
    let getPriecItems = JSON.parse(localStorage.getItem("priecs") || []);
    return getPriecItems.find((r) => r.id === parseInt(id));
  }

  static getquntityCar(quantity) {
    let getpriecQuntity = JSON.parse(localStorage.getItem("priecs") || []);
    return getpriecQuntity.find((r) => r.quantity === parseInt(quantity));
  }

  static setitemsPriec(total) {
    localStorage.setItem("total" , JSON.stringify(total));
  }

  static getPriecitem() {
    return JSON.parse(localStorage.getItem("total"));
  }
}
