async function tamasha2() {
    let tamasha2 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    tamasha2 = res.tamasha2.map((elem) => {
      return `
               ${elem.title}
      `;
    });
  let container = document.querySelector(".tamasha2");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", tamasha2.join(""));
  }
async function theree() {
    let theree = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    theree = res.theree.map((elem) => {
      return `
               ${elem.title}
      `;
    });
  let container = document.querySelector(".theree");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", theree.join(""));
  }
async function laptopp() {
    let laptopp = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    laptopp = res.laptopp.map((elem) => {
      return `
              <img src=${elem.src} alt="">
                <p>
                 ${elem.title}
                </p>
      `;
    });
  let container = document.querySelector(".laptopp");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", laptopp.join(""));
  }
async function tii() {
    let tii = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    tii = res.tii.map((elem) => {
      return `
                 ${elem.title}
      `;
    });
  let container = document.querySelector(".tii");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", tii.join(""));
  }
  async function mobilee() {
    let mobilee = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    mobilee = res.mobilee.map((elem) => {
      return `
              <img src=${elem.src} alt="">
                <p>
                 ${elem.title}
                </p>
      `;
    });
  let container = document.querySelector(".mobilee");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", mobilee.join(""));
  }
  async function buuy1() {
    let buuy1 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    buuy1 = res.buuy1.map((elem) => {
      return `
                      <div class=${elem.class}>    
                   ${elem.title}
                </div>
      `;
    });
  let container = document.querySelector(".buuy1");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", buuy1.join(""));
  }
  async function tii1() {
    let tii1 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    tii1 = res.tii1.map((elem) => {
      return `
                 ${elem.title}
      `;
    });
  let container = document.querySelector(".tii1");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", tii1.join(""));
  }
  async function tasvirtamasha() {
    let tasvirtamasha = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    tasvirtamasha = res.tasvirtamasha.map((elem) => {
      return `
                 <img src=${elem.src} alt="">
      `;
    });
  let container = document.querySelector(".tasvirtamasha");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", tasvirtamasha.join(""));
  }
  export{tamasha2}
  export{theree}
  export{laptopp}
  export{tii}
  export{mobilee}
  export{tii1}
  export{buuy1}
  export{tasvirtamasha}