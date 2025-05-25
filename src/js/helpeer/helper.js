  let fort = document.querySelector(".fort")
       let story = document.querySelector(".stori") 
       let hp = document.querySelector(".hp") 
       let divt = document.querySelector(".divt")
       let filmelment = document.querySelector(".filmwraper")
       let parafilm = document.querySelector(".parafilm")
       let tasvirimg = document.getElementsByClassName("tasvirimg")

let mtnfilm = document.querySelector(".mtnfilm")

      function helper(e){
            
             fetch("https://negar1919.github.io/json-server/db.json")
             .then((rdb)=>{
              return rdb.json()
             })
             .then((rdb)=>{
              r = rdb["helperdb"]
                
                  
             for (const element of tasvirimg) {
                element.style.scale=.9
                element.style.border = "none"

             }             

            e.style.zIndex=10
              e.style.border = "3px solid rgb(255, 255, 255)";
             let filter =  r.filter((element)=>{
                return element.id == e.id
              })

                if (!filter[0]) {
                  alert("جیسونش آماده نیست ")
                }

                 if(e.id == filter[0].id){
                   e.style.scale = 1
                 }


   if (filter[0].itsFilm) {
                  filmelment.innerHTML = `
                    <div class="filmelment">        
                    <img src="./imags/aparatimg.svg" alt="">
                     <p>خرید اشتراک و تماشا</p>
                       </div>
                  `
                  parafilm.innerHTML =`
                  <p>${filter[0].parafilm}</p>
                  `

                }
                else{
                     filmelment.innerHTML = ""
                  
                  parafilm.innerHTML =""
                }



                if (!filter[0].itsFilm) {
                    
                    document.querySelector(".info").id = ""
                   document.querySelector(".slaider1").style.display = "block"
                  document.querySelector(".logofilim").innerHTML= `<img src="${filter[0].logofilim}" alt="">`
                }
               
                else{
                   document.querySelector(".info").id = "filmidselect"
                     document.querySelector(".slaider1").style.display = "none"
                   
                  document.querySelector(".logofilim").innerHTML= ""
                }
            
                fort.innerHTML=`
                  <div class="tasian">${filter[0].title}</div>
                  <div class="kargardan">${filter[0].info}</div>
              `    

              
                    divt.innerHTML=`<img src="${filter[0].background}" alt="">`
              
                story.innerHTML = filter[0].p
              hp.firstChild.innerHTML=filter[0].imdb
              hp.children[1].innerHTML=filter[0].type1
              hp.lastChild.innerHTML=filter[0].type2
        
                      if (filter[0].itsFilm) {
                document.querySelector(".sinfo  ").style.display = "none";
                
                  }
              if (!filter[0].itsFilm) {
                
               document.querySelector(".sinfo  ").style.display = "flex";
              for (let i = 0; i < 8; i++) {
                  
          
                document.querySelector(`.hv${i}`).innerHTML=`<img src="${filter[0].img[i]}" alt="">`
                document.querySelector(`.hp${i}`).innerHTML=filter[0].img_t[i]
             
           
              }
             }




             })


             
         
      }