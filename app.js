const ThemeSwitcher = document.getElementById("switcher");

// if (localStorage.getItem('theme') === 'light') {
//   document.body.classList.add('light')
//   themeSwitcherInnerHtmlChanger()
// }

ThemeSwitcher.addEventListener("click", () => {
  document.body.classList.toggle("light");
  changeStoredTheme();
  themeSwitcherInnerHtmlChanger()
}); 


function themeSwitcherInnerHtmlChanger() {

	if (document.body.classList.contains("light")) {
		ThemeSwitcher.innerHTML = '<i class="fa fa-moon-o"></i>';
  } else ThemeSwitcher.innerHTML = '<i class="fa fa-sun-o"></i>';
  
}

function changeStoredTheme() {
  if (document.body.classList.contains('light')) {
    localStorage.setItem("theme",'light')
  }
  else localStorage.setItem('theme','dark')
}
