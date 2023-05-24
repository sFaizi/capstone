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
