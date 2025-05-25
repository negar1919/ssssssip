import "../css/main.css";
import {menu , logo , butnbut ,butnbut1 } from "./menu/menu.js";
import {slaider , parent , divch3 , parent2 } from "./slaider/slaider.js";
import {mahboob , docme , tasvir ,handleDocmeClicks , forimg , mtnfilm , hp ,stori,logofilim, v1, cover2 ,part1
     ,v,cover3,part, v2, cover4 , part4, v5, cover5 , part5,v6 , cover6, part6,v7 , cover7, part7,v8,cover8,part8
    ,v9 , cover9, part9,} from "./pupuler/pupuler.js";
    
    import {one, photo,laptop,ti ,mobile, ti1 , consol,ti3, buy1} from "./buy/buy.js";
    import {tamasha2,theree,laptopp, tii, mobilee, tii1, buuy1, tasvirtamasha} from "./howwhatch/howwhatch.js";
    import {frees22,wra} from "./freemohtava/mohtava.js";
    import {girl,donia,koodak} from "./children/chidren.js";
    import {cinama, ekran, red , twos , zood} from "./online/online.js";
    import {member,all} from "./comment/comment.js";
    import {renderAccordion} from "./ask/ask.js";
    renderAccordion("accordion-container")
    import {loadFooterMenu} from "./footer/footer.js";

    // import helper from "./helper/helper.js";

function alldeta(){
    swiper()

} 

alldeta()

  async function swiper() {
   await menu()
   await logo()
   await butnbut()
   await butnbut1()
   await slaider() 
   await parent() 
   await divch3() 
   await parent2() 
   await mahboob()
   await docme();
   await handleDocmeClicks(); 
   await tasvir()
   await forimg()
   await mtnfilm()
   await hp()
   await stori()
   await logofilim()
   await v1()
   await cover2()
   await part1()
   await v()
   await cover3()
   await part()
   await v2()
   await cover4()
   await part4()
   await v5()
   await cover5()
   await part5()
   await v6()
   await cover6()
   await part6()      
   await v7()
   await cover7()
   await part7()
   await v8()
   await cover8()
   await part8()    
   await v9()
   await cover9()
   await part9()
   await one()
   await photo()
   await laptop()
   await ti()
   await mobile()
   await ti1()
   await consol()
   await ti3()
   await buy1()
   await tamasha2()
   await theree()
   await laptopp()
   await tii()
   await mobilee()
   await tii1()
   await buuy1()
   await tasvirtamasha()
   await frees22()
   await wra()
   await girl()
   await donia()
   await koodak()
   await red()
   await cinama()
   await ekran()
   await twos()
   await zood()
   await member()
   await all()
  //  await renderAccordion()
   await loadFooterMenu()
  //  await helper()
         

     
   var swiper = new Swiper(".mySwiper", {
     spaceBetween: 0,
     centeredSlides: true,
     autoplay: {
       delay: 2500,
       disableOnInteraction: false,
     },
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

   });
     var sinfo = new Swiper('.sinfo', {
         slidesPerView: 4,
      navigation: {
        nextEl: '.sinfo-next',
        prevEl: '.sinfo-prev',
      },
      direction :"horizontal"
   
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'horizontal' : 'horizontal';

      return direction;
    }
    var smohtava = new Swiper('.smohtava', {
      slidesPerView: 6,
      navigation: {
             nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
        
      },
         direction :"horizontal"
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
  }
  var commentswiper = new Swiper('.commentswiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
             nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }

  }

// helper()