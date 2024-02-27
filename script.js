'use strict';
const btns = document.querySelectorAll('.btn');
const questions = document.querySelectorAll('.question');

const absoluteSrc = src => {
	const read = src.includes('http')
		? src.replace('http://127.0.0.1:5500', '.')
		: src;
	return read;
};

const accToggle = el => {
	const answer = el.parentElement.nextElementSibling;
	const src = absoluteSrc(el.src);
	if (src === './images/icon-plus.svg') {
		el.src = './images/icon-minus.svg';
		answer.style.display = 'block';
	} else {
		el.src = './images/icon-plus.svg';
		answer.style.display = 'none';
	}
};

btns.forEach(btn => btn.addEventListener('click', () => accToggle(btn)));
questions.forEach(question =>
	question.addEventListener('click', () =>
		accToggle(question.nextElementSibling)
	)
);

btns.forEach(btn => btn.addEventListener('touchstart', () => accToggle(btn)));
questions.forEach(question =>
	question.addEventListener('touchstart', () =>
		accToggle(question.nextElementSibling)
	)
);
