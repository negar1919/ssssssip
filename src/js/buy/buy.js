async function one() {
    let one = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    one = res.one.map((elem) => {
      return `
                   <div class="${elem.class}"> 
            ${elem.title}
              
            </div>
      `;
    });
  let container = document.querySelector(".one");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", one.join(""));
  }
async function photo() {
    let photo = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    photo = res.photo.map((elem) => {
      return `
                            <img src=${elem.src} alt="">

      `;
    });
  let container = document.querySelector(".photo");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", photo.join(""));
  }

  async function laptop() {
    let laptop = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    laptop = res.laptop.map((elem) => {
      return `
                <img src=${elem.src} alt="">

                <p>
            ${elem.title}
                
                </p> 
              
            </div>
      `;
    });
  let container = document.querySelector(".laptop");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", laptop.join(""));
  }
  async function ti() {
    let ti = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    ti = res.ti.map((elem) => {
      return `
               ${elem.title}
      `;
    });
  let container = document.querySelector(".ti");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", ti.join(""));
  }

  
  async function mobile() {
    let mobile = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    mobile = res.mobile.map((elem) => {
      return `
                <img src=${elem.src} alt="">

                <p>
            ${elem.title}
                
                </p> 
              
            </div>
      `;
    });
  let container = document.querySelector(".mobile");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", mobile.join(""));
  }
  async function ti1() {
    let ti1 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    ti1 = res.ti1.map((elem) => {
      return `
               ${elem.title}
      `;
    });
  let container = document.querySelector(".ti1");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", ti1.join(""));
  }
  async function consol() {
    let consol = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    consol = res.consol.map((elem) => {
      return `
                <img src=${elem.src} alt="">

                <p>
            ${elem.title}
                
                </p> 
              
            </div>
      `;
    });
  let container = document.querySelector(".consol");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", consol.join(""));
  }
  async function ti3() {
    let ti3 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    ti3 = res.ti3.map((elem) => {
      return `
               ${elem.title}
      `;
    });
  let container = document.querySelector(".ti3");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", ti3.join(""));
  }
  async function buy1() {
    let buy1 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    buy1 = res.buy1.map((elem) => {
      return `
                   <img src=${elem.src} alt="">
                <div class="${elem.class}">    
                  ${elem.title}
                </div>
      `;
    });
  let container = document.querySelector(".buy1");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", buy1.join(""));
  }
 export {one}
 export {photo}
 export {laptop}
 export {ti}
 export {mobile}
 export {ti1}
 export {consol}
 export {ti3}
 export {buy1}