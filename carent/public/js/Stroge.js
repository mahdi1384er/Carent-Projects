// Caret localHost Stroge
const products = [];

export default class Stroge {
  static setdata(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  static getdata() {
    const getAlldata = JSON.parse(localStorage.getItem(products));
    return getAlldata.find((e) => e.id === parseInt(id));
  }

  static setCartValue(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
