import Stroge from "./Stroge.js";

const body = document.querySelector("body");
const heartContener = document.querySelector(".ContenerCarItem");
const totalContener = document.querySelector(".ContenerPriec");
const totals = document.querySelector(".totalPriec");

let heart = [];
let total = [];

export default class prodcut {
  // get heart 
  static Heartbtn() {
    body.addEventListener("click", (e) => {
      let conteins = e.target.dataset.id;
      if (conteins) {
        // console.log(conteins);

        Stroge.getdata(conteins);
        let procutsHeart = { ...Stroge.getdata(conteins), quantity: 1 };
        heart = [...heart, procutsHeart];
        Stroge.setCartValue(heart);
        this.addCarProdcut(procutsHeart);
        //  console.log(a);
      }
    });
  }

  static addCarProdcut(cartsitmes) {
    const cretsdic = document.createElement("div");
    cretsdic.classList.add('ContenerCarItem');
    cretsdic.innerHTML = `   <div
    class="w-[94%] h-[100px] flex items-center justify-between  hover:cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out hover:shadow-secondary-100/40 ml-3 shadow-sm rounded-sm px-2 py-0">


    <div>
      <div>
        <img src="${cartsitmes.imgs}" alt="car6" class="rounded-full w-[121px]">
      </div>
    </div>

    <div class="mr-3 flex items-center justify-between">

      <div class="flex flex-col">
        <div>
          <p class="font-semibold text-[16px]">${cartsitmes.title}</p>
        </div>
        <div>
          <span class="font-bold">${cartsitmes.priec}</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div>
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"
          class="h-5 w-5 text-red-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">
          </path>
        </svg><span class="text-xs mr-1 font-bold"></span><span
          class="MuiTouchRipple-root muirtl-w0pj6f"></span>
      </div>

    </div>



  </div>`;

  heartContener.appendChild(cretsdic);

  }

  static setupe() {
    // get data in Stroge 
    heart = Stroge.getHeartImtes() || [];
    heart.forEach((item) => {
      this.addCarProdcut(item);
    });
  };
  
  // total priecs
  static PriecItems() {
    body.addEventListener("click" , (r) => {
      let databtn = r.target.dataset.priec; 
      let getquntitys = r.target.dataset.totalPriec;  
      // console.log(getquntitys , databtn);

      if(databtn) {
        Stroge.getdataPriec(databtn);
       

        let gettotalPrisItems = Stroge.getdataPriec(databtn);
        total = [...total, gettotalPrisItems];
        
        Stroge.setitemsPriec(total);
        this.addPriecProducts(gettotalPrisItems);
      } 
      else if (getquntitys) {
        Stroge.getquntityCar(getquntitys);
       

        let gettotalPrisItems = { ...Stroge.getquntityCar(getquntitys) , quantity : 1};
        total = [...total, gettotalPrisItems];
        
        this.settotalItems(total);
        this.addPriecProducts(gettotalPrisItems);
      } 
    })
  }

  static addPriecProducts(priecs) {
    let creatdivs = document.createElement("div");
    creatdivs.classList.add('totalContener');
    creatdivs.innerHTML = ` <div
    class="w-[94%] h-[100px] flex items-center justify-between  hover:cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out hover:shadow-secondary-100/40 ml-3 shadow-sm rounded-sm px-2 py-0">
    <div class="flex items-center">
      <div>
        <div>
          <img src="${priecs.imgs}" alt="car6" class="rounded-full w-[121px]">
        </div>
      </div>

      <div class="mr-3 flex items-center justify-between">

        <div class="flex flex-col ml-2">
          <div>
            <p class="font-semibold text-[16px]">${priecs.title}</p>
          </div>
          <div>
            <span class="font-bold">${priecs.People}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div>
      <p name="test1" class="font-bold">${priecs.priec}</p>
    </div>
  </div>
`;

   totalContener.appendChild(creatdivs);
  }

  static setPriec() {
    // get data in Stroge 
    total = Stroge.getPriecitem() || [];
    total.forEach((item) => {
      this.addPriecProducts(item);
      this.settotalItems(total);
    });
  };

  static settotalItems(total) {
    let temcartsitems = 0;

    let totlaprices = total.reduce((acc, curr) => {
      temcartsitems += curr.quantity;
      return acc + curr.quantity * curr.priec;
    }, 0);

    totals.innerText = `${totlaprices.toFixed(2)} $`;
  }
}
