const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwtich = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

      toggle.addEventListener("click",() =>{
        sidebar.classList.toggle("close");
      });
      searchBtn.addEventListener("click",() =>{
        sidebar.classList.remove("close");
      });

      modeSwtich.addEventListener("click",() =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText ="Light Mode"
        }else{
            modeText.innerText = "Dark Mode"
        }
      });

//----Welcome Msg---------
const welcomeMessage = document.querySelector('.welcome-message');

      setTimeout(() => {
         welcomeMessage.style.opacity = 0;
       }, 6000); 

//-------search Menu
const searchInput = document.querySelector('li.search-box input[type="search"]');
const menuLinks = document.querySelectorAll('ul.menu-links li.nav-link');

searchInput.addEventListener('keyup', function(event) {
  const searchTerm = event.target.value.toLowerCase();

  menuLinks.forEach(function(menuLink) {
    const linkText = menuLink.querySelector('span.nav-text').textContent.toLowerCase();

    if (linkText.includes(searchTerm)) {
      menuLink.style.display = 'block';
    } else {
      menuLink.style.display = 'none';
    }
  });
});

