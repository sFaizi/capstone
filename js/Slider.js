const { slider } = require('./DOMS');

const setTime = 4000;

let currPosition = 0;

const viewer = () => {
	slider.slides.forEach((elm) => {
		elm.style.display = 'none';
	});
	slider.captions.forEach((elm) => {
		elm.style.display = 'none';
	});
	slider.slides[currPosition].style.display = 'grid';
	slider.captions[currPosition].style.display = 'grid';
};

const autoMove = () => {
	currPosition += 1;
	if (currPosition >= slider.slides.length) currPosition = 0;
	viewer();
};

let timer;
let reTimer;

const next = () => {
	slider.next.addEventListener('click', () => {
		currPosition += 1;
		if (currPosition >= slider.slides.length) currPosition = 0;
		viewer();

		clearInterval(timer);
		timer = null;
		clearTimeout(reTimer);
		reTimer = null;

		reTimer = setTimeout(() => {
			timer = setInterval(autoMove, setTime);
		}, 2200);
	});
};

const prev = () => {
	slider.prev.addEventListener('click', () => {
		currPosition -= 1;
		if (currPosition < 0) {
			currPosition = slider.slides.length - 1;
		}
		viewer();

		clearInterval(timer);
		timer = null;
		clearTimeout(reTimer);
		reTimer = null;

		reTimer = setTimeout(() => {
			timer = setInterval(autoMove, setTime);
		}, 2000);
	});
};

module.exports = () => {
	if (slider.parentDiv) {
		viewer();
		next();
		prev();
		timer = setInterval(autoMove, setTime);
	}
};
