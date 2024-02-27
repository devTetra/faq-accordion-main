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
	const parent = el.parentElement.parentElement;
	parent.classList.toggle('close');
	const src = absoluteSrc(el.src);
	src === './images/icon-plus.svg'
		? (el.src = './images/icon-minus.svg')
		: (el.src = './images/icon-plus.svg');
};

btns.forEach(btn => btn.addEventListener('click', () => accToggle(btn)));
questions.forEach(question =>
	question.addEventListener('click', () =>
		accToggle(question.nextElementSibling)
	)
);

// btns.forEach(btn => btn.addEventListener('touchstart', () => accToggle(btn)));
// questions.forEach(question =>
// 	question.addEventListener('touchstart', () =>
// 		accToggle(question.nextElementSibling)
// 	)
// );
