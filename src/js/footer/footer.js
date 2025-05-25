async function loadFooterMenu() {
    try {
      const response = await fetch("https://negar1919.github.io/json-server/db.json");
      const json = await response.json();

        
      const data = json["footerMenu"][0]; 
  
      const menuContainer = document.createElement('ul');
      menuContainer.classList.add('footer-menu');
  
      data.items.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = "#";
        a.textContent = item.title;
        li.appendChild(a);
  
        if (item.submenu) {
          const submenu = document.createElement('div');
          submenu.classList.add('submenu');
          const ul = document.createElement('ul');
  
          item.submenu.forEach(sub => {
            const subLi = document.createElement('li');
  
            if (typeof sub === 'string') {
              const subA = document.createElement('a');
              subA.href = "#";
              subA.textContent = sub;
              subLi.appendChild(subA);
            } else {
              const img = document.createElement('img');
              img.src = './imags/' + sub.icon;
              img.alt = sub.label;
  
              const subA = document.createElement('a');
              subA.href = "#";
              subA.textContent = sub.label;
  
              subLi.appendChild(img);
              subLi.appendChild(subA);
            }
  
            ul.appendChild(subLi);
          });
  
          submenu.appendChild(ul);
          li.appendChild(submenu);
        }
  
        menuContainer.appendChild(li);
      });
  
      document.querySelector('.menufooter .rfooter nav').appendChild(menuContainer);
    } catch (error) {
      console.error('Error loading footer menu:', error);
    }
  }
  
 export {loadFooterMenu};