async function mahboob() {
    let mahboob = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    mahboob = res.mahboob.map((elem) => {
      return `
   <div class="${elem.class}">
      ${elem.title}

        </div>
      `;
    });
  let container = document.querySelector(".mahboob");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", mahboob.join(""));
  }

async function docme() {
    let docme = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    docme = res.docme.map((elem) => {
      return `
        <button class="${elem.class}" data-target="${elem.data}" >
          ${elem.title} </button> 
      `;
    });
  let container = document.querySelector(".docme");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", docme.join(""));


  }



async function tasvir() {
    let tasvir = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    tasvir = res.tasvir.map((elem,i) => {
      if (i <= 5) {
         return `
      <img src=${elem.src} id=${i} onclick="helper(this)" class="tasvirimg"  alt="">
      `;
      }
     else{
      
     }     
    });

    
  let container = document.querySelector(".tasvir");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", tasvir.join(""));
  }

  function handleDocmeClicks() {
    const buttons = document.querySelectorAll(".docme button");
     buttons.forEach((b) => b.classList.remove("active"));
        buttons[0].classList.add("active")
      
 
    buttons.forEach((btn) => {
      btn.addEventListener("click", async () => {
     
          if (btn.getAttribute("data-target") == "filims") {
            //  document.querySelector(".info").id = "filmidselect"
            btn.classList.add("active")
            buttons[0].classList.remove("active")
           
          }else{
            //  document.querySelector(".info").id = ""
             btn.classList.add("active")
            buttons[1].classList.remove("active")
           
              

          }
        const type = btn.dataset.target;

          
        const data = await fetch("https://negar1919.github.io/json-server/db.json")
        const res = await data.json();
        const filtered = res.tasvir.filter((item) => item.type === type);
        const html = filtered.map((elem , i) => `<img src="${elem.src}" class="tasvirimg"  id=${(elem.id-1)} onclick="helper(this)"  alt="">`).join("");
        const container = document.querySelector(".tasvir");
        container.innerHTML = html;
      });
    });
    
  }
  
  async function forimg() {
    let forimg = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    forimg = res.forimg.map((elem) => {
      return `
        <img src="${elem.src}" alt="">

      `;
    });
  let container = document.querySelector(".divt");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", forimg.join(""));
  }
  async function mtnfilm() {
    let mtnfilm = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    mtnfilm = res.mtnfilm.map((elem) => {
      return `
        <div class="${elem.class}">${elem.title}</div>

      `;
    });
  let container = document.querySelector(".fort");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", mtnfilm.join(""));
  }
  async function hp() {
    let hp = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    hp = res.hp.map((elem) => {
      return `
          <div class="${elem.class}">${elem.title}</div>

      `;
    });
  let container = document.querySelector(".hp");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", hp.join(""));
  }
  async function stori() {
    let stori = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();      
     stori = res["stori"].map((elem) => { 
      return `
               ${elem.title}
      `;
    });
  let container = document.querySelector(".stori");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", stori.join(""));
  }
  async function logofilim() {
    let logofilim = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    logofilim = res.logofilim.map((elem) => {
      return `
        <img src="${elem.src}" alt="">

      `;
    });
  let container = document.querySelector(".logofilim");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", logofilim.join(""));
  }
  async function v1() {
    let v1 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    v1 = res.v1.map((elem) => {
      return `
        <img src="${elem.src}" alt="">

      `;
    });
  let container = document.querySelector(".v1");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", v1.join(""));
  }
  async function cover2() {
    let cover2 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    cover2 = res.cover2.map((elem) => {
      return `
      <div class="${elem.class}">${elem.title}</div>
                    <div class="${elem.class}">${elem.title}</div>
      `;
    });
  let container = document.querySelector(".cover2");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", cover2.join(""));
  }
  async function part1() {
    let part1 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    part1 = res.part1.map((elem) => {
      return `
                    ${elem.title}

      `;
    });
  let container = document.querySelector(".part1");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", part1.join(""));
  }
  
  async function v() {
    let v = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    v = res.v.map((elem) => {
      return `
        <img src="${elem.src}" alt="">

      `;
    });
  let container = document.querySelector(".v");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", v.join(""));
  }
  async function cover3() {
    let cover3 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    cover3 = res.cover3.map((elem) => {
      return `
        <img src="${elem.src}" alt="">

      `;
    });
  let container = document.querySelector(".cover3");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", cover3.join(""));
  }
  async function part() {
    let part = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    part = res.part.map((elem) => {
      return `
                    ${elem.title}

      `;
    });
  let container = document.querySelector(".part");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", part.join(""));
  }
  async function v2() {
    let v2 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    v2 = res.v2.map((elem) => {
      return `
        <img src="${elem.src}" alt="">

      `;
    });
  let container = document.querySelector(".v2");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", v2.join(""));
  }
  async function cover4() {
    let cover4 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    cover4 = res.cover4.map((elem) => {
      return `
        <img src="${elem.src}" alt="">

      `;
    });
  let container = document.querySelector(".cover4");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", cover4.join(""));
  }
  async function part4() {
    let part4 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    part4 = res.part4.map((elem) => {
      return `
                    ${elem.title}

      `;
    });
  let container = document.querySelector(".part4");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", part4.join(""));
  }
  
  async function v5() {
    let v5 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    v5 = res.cover5.map((elem) => {
      return `
        <img src="${elem.src}" alt="">

      `;
    });
  let container = document.querySelector(".v5");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", v5.join(""));
  }
  async function cover5() {
    let cover5 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    cover5 = res.cover5.map((elem) => {
      return `
        <img src="${elem.src}" alt="">

      `;
    });
  let container = document.querySelector(".cover5");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", cover5.join(""));
  }
  async function part5() {
    let part5 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    part5 = res.part5.map((elem) => {
      return `
                    ${elem.title}

      `;
    });
  let container = document.querySelector(".part5");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", part5.join(""));
  }
  async function v6() {
    let v6 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    v6 = res.v6.map((elem) => {
      return `
        <img src="${elem.src}" alt="">

      `;
    });
  let container = document.querySelector(".v6");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", v6.join(""));
  }
  async function cover6() {
    let cover6 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    cover6 = res.cover6.map((elem) => {
      return `
        <img src="${elem.src}" alt="">

      `;
    });
  let container = document.querySelector(".cover6");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", cover6.join(""));
  }
  async function part6() {
    let part5 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    part6 = res.part6.map((elem) => {
      return `
                    ${elem.title}

      `;
    });
  let container = document.querySelector(".part6");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", part6.join(""));
  }
  
  async function v7() {
    let v7 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    v7 = res.v7.map((elem) => {
      return `
        <img src="${elem.src}" alt="">

      `;
    });
  let container = document.querySelector(".v7");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", v7.join(""));
  }
  async function cover7() {
    let cover7 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    cover7 = res.cover7.map((elem) => {
      return `
        <img src="${elem.src}" alt="">

      `;
    });
  let container = document.querySelector(".cover7");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", cover7.join(""));
  }
  async function part7() {
    let part7 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    part7 = res.part7.map((elem) => {
      return `
                    ${elem.title}

      `;
    });
  let container = document.querySelector(".part7");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", part7.join(""));
  }
  
  async function v8() {
    let v8 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    v8 = res.v8.map((elem) => {
      return `
        <img src="${elem.src}" alt="">

      `;
    });
  let container = document.querySelector(".v8");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", v8.join(""));
  }
  async function cover8() {
    let cover8 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    cover8 = res.cover8.map((elem) => {
      return `
        <img src="${elem.src}" alt="">

      `;
    });
  let container = document.querySelector(".cover8");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", cover8.join(""));
  }
  async function part8() {
    let part8 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    part8 = res.part8.map((elem) => {
      return `
                    ${elem.title}

      `;
    });
  let container = document.querySelector(".part8");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", part8.join(""));
  }

     
  async function v9() {
    let v9 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    v9 = res.v9.map((elem) => {
    
      
      return `
        <img src="${elem.src}" alt="">

      `;
    });
  let container = document.querySelector(".v9");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", v9.join(""));
     document.querySelector(".hv3").innerHTML = `<img src="./imags/tasianp4.webp" alt="">`
  }
  async function cover9() {
    let cover9 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    cover9 = res.cover9.map((elem) => {
      return `
        <img src="${elem.src}" alt="">

      `;
    });
  let container = document.querySelector(".cover9");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", cover9.join(""));
  }
  async function part9() {
    let part9 = "";
    let data = await fetch("https://negar1919.github.io/json-server/db.json");
    let res = await data.json();
    part9 = res.part9.map((elem) => {
      return `
                    ${elem.title}

      `;
    });
  let container = document.querySelector(".part9");
container.innerHTML = "";
container.insertAdjacentHTML("afterbegin", part9.join(""));
  }

     
  export {tasvir}
  export {handleDocmeClicks}
  export {forimg}
  export {mahboob}
  export {docme}
  export {mtnfilm}
  export {hp}
  export {stori}
  export {logofilim}
  export {v1}
  export {cover2}
  export {part1}
  export {v}
  export {cover3}
  export {part}
  export {v2}
  export {cover4}
  export {part4}
  export {v5}
  export {cover5}
  export {part5}
  export {v6}
  export {cover6}
  export {part6}
  export {v7}
  export {cover7}
  export {part7}
  export {v8}
  export {cover8}
  export {part8}
  export {v9}
  export {cover9}
  export {part9}
