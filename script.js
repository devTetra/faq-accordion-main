'use strict';
const btns = document.querySelectorAll('.btn');
const questions = document.querySelectorAll('.question');

const absoluteSrc = src => {
	const read = src.includes('https')
		? src.replace('https://devtetra.github.io/faq-accordion-main', '.')
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
	console.log(src);
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
