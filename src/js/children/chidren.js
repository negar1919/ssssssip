async function girl() {
    let girl = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    girl = res.girl.map((elem) => {
      return `
                      <img src=${elem.src} alt="">

      `;
    });
  let container = document.querySelector(".girl");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", girl.join(""));
  }
async function donia() {
    let donia = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    donia = res.donia.map((elem) => {
      return `
                    <div class="${elem.class}"> 
                    ${elem.title}
           </div>

      `;
    });
  let container = document.querySelector(".donia");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", donia.join(""));
  }
async function koodak() {
    let koodak = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    koodak = res.koodak.map((elem) => {
      return `
                    <div class="${elem.class}">
              <div class="mtnn2"> 
                ${elem.title}
              </div>
              </div>

      `;
    });
  let container = document.querySelector(".koodak");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", koodak.join(""));
  }
  export{girl}
  export{donia}
  export{koodak}