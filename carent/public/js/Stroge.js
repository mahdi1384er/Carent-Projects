// Caret localHost Stroge
const products = [];
const heart = [];

export default class Stroge {
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
    return JSON.parse(localStorage.getItem('heart')) ? JSON.parse(localStorage.getItem('heart')) : [];
};
}
