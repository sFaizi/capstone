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
