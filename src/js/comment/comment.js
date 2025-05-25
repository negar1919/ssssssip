async function member() {
    let member = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    member = res.member.map((elem) => {
      return `  
            <div class="member">
            ${elem.title}
          </div>

      `;
    });
  let container = document.querySelector(".member");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", member.join(""));
  }
async function all() {
    let all = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    all = res.all.map((elem) => {
      return `  
         <div class=${elem.class}>
                <div class=${elem.class1}>
                  <div class=${elem.class3}>
                    <img src=${elem.src} alt="">
                  <div class=${elem.class4}>             
                  ${elem.title}

                  </div>
                    </div>
                  <div class=${elem.class5}>
                    <img src=${elem.src1} alt="">
                  </div>
               
                </div>
                <div class=${elem.class6}>
                  عالیه خیلی فیلم و سریال های قشنگی داره 
                  ${elem.title1}
                </div>
              </div>

      `;
    });
  let container = document.querySelector(".all");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", all.join(""));
  }
  export{member}
  export{all}