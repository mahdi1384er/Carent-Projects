import Stroge from "./Stroge.js";

const body = document.querySelector("body");
const heartContener = document.querySelector(".ContenerCarItem");
let heart = [];
let data = [];

export default class prodcut {
  static Heartbtn() {
    body.addEventListener("click", (e) => {
      let conteins = e.target.dataset.id;
      if (conteins) {
        // console.log(conteins);

        Stroge.getdata(conteins);
        let procutsHeart = { ...Stroge.getdata(conteins), quantity: 1 };
        heart = [...heart, procutsHeart];
        Stroge.setCartValue(heart);
        //  console.log(a);
      } else {
        // console.log('no get btn');
      }
    });
  }

  static showProdcut() {
    data.forEach((items) => {
      let div = document.createElement("div");
      div.classList.add("ContenerCarItem");
      div.innerHTML` <div class="w-[94%] h-[100px] flex items-center justify-between  hover:cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out hover:shadow-secondary-100/40 ml-3 shadow-sm rounded-sm px-2 py-0">
        <div>
          <div>
            <img src="../img/Car (6).png" alt="car6" class="rounded-full w-[121px]">
          </div>
        </div>

        <div class="mr-3 flex items-center justify-between">

          <div class="flex flex-col">
            <div>
              <p class="font-semibold text-[16px]">Koenigsegg</p>
            </div>
            <div>
              <span class="font-bold">$99.00/</span>
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
      heartContener.appendChild(div);
    });
  }

  static setup() {
    heart = Stroge.getHeartImtes();
    heart.forEach((items) => {
      this.showProdcut(items);
    });
  }
}
