const Car = document.querySelector(".carItems");
let aryy = [];


export default class dinamic {
  static dataCar() {
      aryy.forEach((items) => {
        const cretDIV = document.createElement("div");
        cretDIV.classList.add("carItems");
        cretDIV.innerHTML = ` <div>
            <div class=" sm:h-[340px] w-[100%] rounded-[10px] bg-white p-2 mt-7">
              <div class="flex items-center justify-between">
                <div>
                  <div>
                    <p class="font-semibold text-[16px]">Koenigsegg</p>
                  </div>
                  <div>
                    <p class="text-[13px] font-light text-[#90A3BF]">Sport</p>
                  </div>
                </div>
                <div  x-data='{open: false}'>
                  <div class="hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.1"
                      stroke="currentColor" class="w-5 h-5 text-red-600">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </div>
                  <div class="text-white">.</div>
                </div>
              </div>
              <div class="flex justify-around sm:flex-col sm:h-[181px]">
                <div class="bg-gradient-to-t from-slate-100">
                  <img src="${items.imgs}" alt="Car2" class="items-center m-auto mt-6 w-[201px]" />
                </div>
                <div class="mt-8 flex flex-col h-[80px] items-center justify-between sm:flex-row">
                  <div class="flex items-center justify-between w-[56px] sm:w-[41px] hover:cursor-pointer">
                    <div>
                      <img src="../img/bock.svg" alt="bock" />
                    </div>
                    <div>
                      <p class="text-[#90A3BF] text-[12px] font-medium">${items.bock}</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-between w-[58px] hover:cursor-pointer">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2"
                        stroke="currentColor" class="w-4 h-4 text-[#90A3BF] mr-[5px]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-[#90A3BF] text-[12px] font-medium">Manual</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-between w-[68px] hover:cursor-pointer">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2"
                        stroke="currentColor" class="w-4 h-4 text-[#90A3BF]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-[#90A3BF] text-[12px] font-medium">${items.People}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between p-2 mt-7">
                <div class="flex">
                  <div class="flex flex-col">
                    <span class="font-bold">${items.priec}/</span>
                    <span class="text-[12px] text-[#90A3BF] font-medium line-through">${items.Discount}</span>
                  </div>
                  <span class="text-[#90A3BF] font-bold text-[15px]">day</span>
                </div>
                <div class='mt-[6px]'>
                  <button
                    class="w-[98px] h-[34px] text-white bg-[#3563E9] text-[14px] rounded-[4px] hover:cursor-pointer">
                    Rental Now
                  </button>
                </div>
              </div>
            </div>
          </div>`;
        Car.appendChild(cretDIV);
      });
  }

  static slider() {
    new Swiper(".swiper", {
      speed: 20000,
      spaceBetween: 12,
    });
  }

  static axios() {
    axios
    .get("http://localhost:3000/posts")
    .then((yes) => {
      aryy = yes.data;
      this.dataCar();
    })
    .catch((eror) => {
      console.log(eror);
    });
  }
}


