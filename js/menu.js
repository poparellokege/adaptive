document.querySelector('#menu-burger').addEventListener('click', () => {
	document.querySelector('#mobile-menu').classList.add('show');
	document.querySelector('#mobile-menu').classList.remove('hidden');
  }); 

document.querySelector('#close').addEventListener('click', () => {
	document.querySelector('#mobile-menu').classList.add('hidden');
	document.querySelector('#mobile-menu').classList.remove('show');
  }); 