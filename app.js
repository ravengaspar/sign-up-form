const form = document.querySelector('.form');
const formControl = form.querySelectorAll('.form-control');

function checkInputs(e) {
	e.preventDefault();
	const target = e.target;
	const input = target.closest('input');
	const formControl = target.closest('.form-control');

	formControl.classList.remove('error', 'success');

	if (input.value === '') {
		const label = input.previousElementSibling.textContent;
		const errorLabel = input.parentElement.lastElementChild;

		errorLabel.textContent = `${label} cannot be blank`;
		formControl.classList.add('error');
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const inputs = document.querySelectorAll('input');
	inputs.forEach((input) => {
		if (input.value === '') {
			const label = input.previousElementSibling.textContent;
			const errorLabel = input.parentElement.lastElementChild;
			errorLabel.textContent = `${label} cannot be blank`;
			input.parentElement.classList.add('error');
		}
	});
});

formControl.forEach((form) => form.addEventListener('focusout', (e) => checkInputs(e)));
