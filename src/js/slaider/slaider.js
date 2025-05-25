async function slaider() {
    let slaider = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    slaider = res.slaider.map((elem) => {
      return `
             <div class="swiper-slide">
                <img src=${elem.src} alt=${elem.alt}>
              </div>

      `;
    });
    document.querySelector(".swiper-wrapper").insertAdjacentHTML("afterbegin", slaider.join(""));
  }
async function parent() {
    let parent = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    parent = res.parent.map((elem) => {
      return `

      
             <div class="${elem.class}">
                   ${elem.title}</div>
                     

      `;
    });
  let container = document.querySelector(".parent");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", parent.join(""));
  }
async function divch3() {
    let divch3 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    divch3 = res.divch3.map((elem) => {
      return `
      <div class="${elem.class}">
           <img src="${elem.img}" alt="">
           <div class="mtn">    
              ${elem.title}</div>
            </div>
      `;
    });
  let container = document.querySelector(".divch3");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", divch3.join(""));
  }
async function parent2() {
    let parent2 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    parent2 = res.parent2.map((elem) => {
      return `
      <div class="${elem.class}">
           <img src="${elem.img}" alt="">
           <div class="mtn">    
              ${elem.title}</div>
            </div>
      `;
    });
  let container = document.querySelector(".parent2");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", parent2.join(""));
  }

  export {slaider}
  export {parent}
  export {divch3}
  export {parent2}
