const body = document.body;

const btnTheme = document.querySelector('#btn-theme');
const btnHamburger = document.querySelector('.nav__hamburger i'); // selecting the icon inside the button

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
}

const getBodyTheme = localStorage.getItem('portfolio-theme') || 'light'; // default to 'light' if not set
const getBtnTheme = localStorage.getItem('portfolio-btn-theme') || 'fa-moon'; // default to 'fa-moon' if not set

addThemeClass(getBodyTheme, getBtnTheme);

const isDark = () => body.classList.contains('dark');

const setTheme = (bodyClass, btnClass) => {
	body.classList.remove(localStorage.getItem('portfolio-theme'));
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'));
	addThemeClass(bodyClass, btnClass);
	localStorage.setItem('portfolio-theme', bodyClass);
	localStorage.setItem('portfolio-btn-theme', btnClass);
}

const toggleTheme = () => isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun');

btnTheme.addEventListener('click', toggleTheme);

const displayList = () => {
	const navUl = document.querySelector('.nav__list');
	btnHamburger.classList.toggle('fa-bars');
	btnHamburger.classList.toggle('fa-times');
	navUl.classList.toggle('display-nav-list');
}

btnHamburger.parentElement.addEventListener('click', displayList); // attach the event to the parent button

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top');
	if (window.scrollY > 500) {
		btnScrollTop.style.display = 'block';
	} else {
		btnScrollTop.style.display = 'none';
	}
}

document.addEventListener('scroll', scrollUp);
