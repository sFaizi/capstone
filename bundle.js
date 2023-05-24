(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./DOMS":2}],2:[function(require,module,exports){
exports.intersections = [
	document.querySelector('.carousel'),
	document.querySelector('.services'),
	document.querySelector('.msg'),
	document.querySelector('.msg-title'),
	document.querySelector('.clients'),
	document.querySelector('.exp'),
];

exports.slider = {
	parentDiv: document.querySelector('.slider'),
	slides: document.querySelectorAll('.slider_slides-imgs'),
	prev: document.querySelector('.slider_prev'),
	next: document.querySelector('.slider_next'),
	captions: document.querySelectorAll('.slider_captions-text'),
};

exports.navigation = {
	miniNav: document.querySelector('.miniNav'),
	mCheck: document.getElementById('miniNav'),
	mBackground: document.querySelector('.miniNav--background'),
};

exports.carousel = {
	parentDiv: document.querySelector('.carousel'),
	infoBoxes: document.querySelectorAll('.carousel_info_capsule'),
	images: document.querySelectorAll('.carousel_images-img'),
	buttons: document.querySelectorAll('.carousel_tabs-btn'),
};

exports.home = {
	servicesUnits: document.querySelectorAll('.services_body_unit'),
	clientLogos: document.querySelectorAll('.clients_box-img'),
};

},{}],3:[function(require,module,exports){
const { intersections } = require('./DOMS');

module.exports = () => {
	const callback = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) entry.target.classList.add('movingUp');
		});
	};
	const observer = new IntersectionObserver(callback);
	intersections.forEach((elm) => observer.observe(elm));
};

},{"./DOMS":2}],4:[function(require,module,exports){
module.exports = () => {
	window.addEventListener('load', () => {
		document.querySelector('.loader').remove();
	});
};

},{}],5:[function(require,module,exports){
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

},{"./DOMS":2}],6:[function(require,module,exports){
const { home } = require('./DOMS');

exports.services = () => {
	document.addEventListener('DOMContentLoaded', () => {
		const units = home.servicesUnits;

		const handleHover = (event) => {
			const hoveredUnit = event.currentTarget;
			const siblings = Array.from(hoveredUnit.parentNode.children).filter(
				(el) => el !== hoveredUnit
			);

			hoveredUnit.style.backgroundColor = '#202520';
			hoveredUnit.querySelector('.services_body_unit-cap').style.color = '#68b684ff';
			hoveredUnit.querySelector('.services_body_unit-des').style.color = '#e7f5c4';
			hoveredUnit.querySelector('.services_body_unit-link').style.color = '#95e06cff';

			siblings.forEach((sibling) => {
				sibling.style.backgroundColor = '';
				sibling.querySelector('.services_body_unit-cap').style.color = '';
				sibling.querySelector('.services_body_unit-des').style.color = '';
				sibling.querySelector('.services_body_unit-link').style.color = '';
			});
		};

		const handleLeave = (event) => {
			const hoveredUnit = event.currentTarget;

			hoveredUnit.style.backgroundColor = '';
			hoveredUnit.querySelector('.services_body_unit-cap').style.color = '';
			hoveredUnit.querySelector('.services_body_unit-des').style.color = '';
			hoveredUnit.querySelector('.services_body_unit-link').style.color = '';
		};

		units.forEach((unit) => {
			unit.addEventListener('mouseenter', handleHover);
			unit.addEventListener('mouseleave', handleLeave);
		});
	});
};

exports.clientsHighlighter = () => {
	if (home.clientLogos[0]) {
		let index = 0;
		setInterval(() => {
			home.clientLogos.forEach((logo, i) => {
				if (i === index) {
					logo.classList.add('highlighted');
				} else {
					logo.classList.remove('highlighted');
				}
			});

			index = (index + 1) % home.clientLogos.length;
		}, 800);
	}
};

},{"./DOMS":2}],7:[function(require,module,exports){
const Slider = require('./Slider');
const { miniNavSettings } = require('./navigation');
const Carousel = require('./Carousel');
const IntersectionAnimation = require('./IntersectionAnimation');
const { services, clientsHighlighter } = require('./home');
const Loader = require('./Loader');

IntersectionAnimation();
Slider();
miniNavSettings();
Carousel();
services();
clientsHighlighter();
Loader();

},{"./Carousel":1,"./IntersectionAnimation":3,"./Loader":4,"./Slider":5,"./home":6,"./navigation":8}],8:[function(require,module,exports){
const { navigation } = require('./DOMS');

exports.miniNavSettings = () => {
	if (navigation.miniNav) {
		navigation.miniNav.addEventListener('click', (e) => {
			if (e.target.classList.contains('closable') && navigation.mCheck.checked === true) {
				navigation.mCheck.checked = false;
			}
		});
	}
};

},{"./DOMS":2}]},{},[7]);
