const form = document.querySelector('form');
const firstName = form.querySelector('.firstName');
const lastName = form.querySelector('.lastName');
const email = form.querySelector('.email');
const password = form.querySelector('.password');
const primaryBtn = document.querySelector('.btn--primary');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	if (firstName.value === '') {
		firstName.parentNode.children[1].classList.add('error');
		firstName.parentNode.children[2].classList.add('error');
		firstName.classList.add('error');
		firstName.setAttribute('placeholder', '');
	}
	if (lastName.value === '') {
		lastName.parentNode.children[1].classList.add('error');
		lastName.parentNode.children[2].classList.add('error');
		lastName.classList.add('error');
		lastName.setAttribute('placeholder', '');
	}
	if (email.value === '') {
		email.parentNode.children[1].classList.add('error');
		email.parentNode.children[2].classList.add('error');
		email.classList.add('error');
		email.setAttribute('placeholder', '');
	}
	if (password.value === '') {
		password.parentNode.children[1].classList.add('error');
		password.parentNode.children[2].classList.add('error');
		password.classList.add('error');
		password.setAttribute('placeholder', '');
	}
});
