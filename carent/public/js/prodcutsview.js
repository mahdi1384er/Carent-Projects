import Stroge from "./Stroge.js";

const body = document.querySelector("body");
let heart = [];

export default class prodcut {
  static Heartbtn() {
    body.addEventListener("click", (e) => {
      let conteins = e.target.dataset.id;
      if(conteins) {
        // console.log(conteins);
      
       let a = Stroge.getdata(conteins);
       let procutsHeart = {...Stroge.getdata(conteins) , quantity:1};
       heart = [...heart , procutsHeart];
       Stroge.setCartValue(heart);
       console.log(a);
      
      
      }
       else {
        console.log('no get btn');
      }
    });
  }

 
}
