const { carousel } = require('./DOMS');

const hider = () => {
	carousel.infoBoxes.forEach((elm) => (elm.style.display = 'none'));
	carousel.images.forEach((elm) => (elm.style.display = 'none'));
	carousel.buttons.forEach((elm) => (elm.classList = 'carousel_tabs-btn'));
};

let position = 0;

const viewer = () => {
	carousel.images[position].style.display = 'grid';
	carousel.infoBoxes[position].style.display = 'grid';
	carousel.buttons[position].classList = 'carousel_tabs-btn active';
};

const autoMove = () => {
	position += 1;
	if (position >= carousel.buttons.length) position = 0;
	hider();
	viewer();
};

const timer = setInterval(autoMove, 3500);

const liveBtns = () => {
	carousel.buttons.forEach((elm, index) => {
		elm.addEventListener('click', () => {
			position = index;
			hider();
			viewer();
			clearInterval(timer);
		});
	});
};

module.exports = () => {
	if (carousel.parentDiv) {
		hider();
		viewer();
		liveBtns();
	}
};
