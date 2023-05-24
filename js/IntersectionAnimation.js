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
