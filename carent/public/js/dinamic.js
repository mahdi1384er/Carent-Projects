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
                  <div   class="hover:cursor-pointer h-[20px]">
                   <div  @click='open = ! open'>
                      <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aaogwmrptgtl1vht5o3zh4d92kbjlyrp" class="w-5 h-5 text-red-600 crayons-icon reaction-icon not-reacted"><title id="aaogwmrptgtl1vht5o3zh4d92kbjlyrp">Like comment: </title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                   </div>
                   <div x-show="open" @click="open = false" class='h-[6px]'>
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ae27pasxndznuguvytx893u1mrek6qnq" class="crayons-icon relative bottom-5 crayons-icon reaction-icon--like reaction-icon reacted"><title id="ae27pasxndznuguvytx893u1mrek6qnq">Like comment: </title>
                       <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
                      </svg>
                   </div>
                  
                  </div>
                </div>
              </div>
              <div class="flex justify-around sm:flex-col sm:h-[181px]">
                <div class="bg-gradient-to-t from-slate-100">
                  <img src="${items.imgs}" alt="Car2" class="items-center m-auto mt-6  w-[180px] h-[70px]" />
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

  static axiost() {
    function callStoreApi() {
      const fullUrl = "http://localhost:3000/posts";
      let response = "";

      return (response = axios
        .get(fullUrl)
        .then((response) => {
          return response.data;
          // console.log(a);
        })
        .catch((eror) => {
          console.log(eror);
        }));
    }
    return callStoreApi();

}

  static created() {
    const a = this.axiost();
    console.log(a);
  }
}
