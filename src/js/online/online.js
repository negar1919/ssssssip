async function red() {
    let red = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    red = res.red.map((elem) => {
      return `
                          <img src= ${elem.src} alt="" >


      `;
    });
  let container = document.querySelector(".red");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", red.join(""));
  }
async function cinama() {
    let cinama = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    cinama = res.cinama.map((elem) => {
      return `
                           <div class="cinama">
            ${elem.title}
          </div>


      `;
    });
  let container = document.querySelector(".cinama");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", cinama.join(""));
  }
async function ekran() {
    let ekran = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    ekran = res.ekran.map((elem) => {
      return `  
       <div class="${elem.class}">
              <img src=${elem.src} alt="">
              <div class="mtnekran">
                ${elem.title}
              </div>
            </div>

      `;
    });
  let container = document.querySelector(".ekran");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", ekran.join(""));
  }
async function twos() {
    let twos = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    twos = res.twos.map((elem) => {
      return `  
      <div class="${elem.class}">
              <div class="${elem.newclass1}">

              <img src=${elem.src} alt="">
              <div class="${elem.newclass2}">
              <div class="${elem.newclass3}"> ${elem.title}</div>
              <div class=${elem.newclass3}> 
                <div class="${elem.newclass4}">
                  ${elem.newtitle1}
                </div>
             <div class="${elem.newclass5}">
          <p>${elem.p1}</p>
              <p>${elem.p2}</p>
             </div>
             <div class="${elem.newclass6}">
               ${elem.newtitle2}
             </div>
              </div>
         
            </div>
            <div class="${elem.newclass7}">
              <div class="${elem.newclass8}">
                 ${elem.newtitle3}
              </div>
            </div>
          </div>
            </div>

      `;
    });
  let container = document.querySelector(".twos");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", twos.join(""));
  }
async function zood() {
    let zood = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    zood = res.zood.map((elem) => {
      return `    <div class="${elem.newclass1}">

              <img src=${elem.src} alt="">
              <div class="${elem.newclass2}">
              <div class=${elem.newclass3}>${elem.title}</div>
              <div class="${elem.newclass3}"> 
                <div class="${elem.newclass4}">${elem.newtitle1}</div>
             <div class="${elem.newclass5}">
            <p>${elem.p1}</p>
              <p>${elem.p2}</p>
             </div>
             <div class="${elem.newclass6}">${elem.newtitle2} </div>
              </div>
         
            </div>
            <div class="${elem.newclass7}">
              <div class="${elem.newclass8}"> ${elem.newtitle3} </div>
            </div>
          </div>

      `;
    });
  let container = document.querySelector(".zood");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", zood.join(""));
  }
  export{red}
  export{cinama}
  export{ekran}
  export{twos}
  export{zood}