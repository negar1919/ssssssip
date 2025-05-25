async function menu() {
    let menu = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    menu = res.menu.map((elem,i) => {
   
   
        let img = ["./imags/img2.svg","./imags/flogop.jpg","/imags/icons8-search-32.png"]
      
      return `
        <li>
          <img src="${img[i]}" alt="" />
          <a href="${elem.href}">${elem.title}</a>
        </li>
      `;
    });
    document.querySelector("#menu>nav>.right>ul").insertAdjacentHTML("afterbegin", menu.join(""));
  }
  
  async function logo() {
    let data = await fetch("http://localhost:3000/logo");
    let res = await data.json();
    let logoHTML = `
      <img src="${res.src}" alt="${res.alt}" id="logo-img" />
    `;
    document.querySelector("#logo").insertAdjacentHTML("afterbegin", logoHTML);
  }
  
  async function butnbut() {
    let butnbut = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    butnbut = res.menuboton.map((elem) => {
      return `
           <div class="sub">
              <button id = "sub-btn">
             <img src="./imags/aparatimg.svg" alt="">
 <p>   ${elem.title}   </p>
               
              </button>
            </div>
      `;
    });
    document.querySelector("#menu>nav>.left>.sub").insertAdjacentHTML("afterbegin", butnbut.join(""));
  }
  
  async function butnbut1() {
    let butnbut1 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    butnbut1 = res.menuboton1.map((elem) => {
      return `
          <button>${elem.title}</button>
      `;
    });
    document.querySelector("#menu>nav>.left>.login").insertAdjacentHTML("afterbegin", butnbut1.join(""));
}
  
  export { menu, logo, butnbut , butnbut1};
