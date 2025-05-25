async function frees22() {
    let frees22 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    frees22 = res.frees22.map((elem) => {
      return `
               ${elem.title}
      `;
    });
  let container = document.querySelector(".frees22");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", frees22.join(""));
  }
async function wra() {
    let wra = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    wra = res.wra.map((elem) => {
      return `
                 <div class="${elem.class}">
                  <img src=${elem.src} alt="">
                  <div class="namefree">${elem.title}</div>
                </div>
      `;
    });
  let container = document.querySelector(".wra");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", wra.join(""));
  }
  export{frees22}
  export{wra}