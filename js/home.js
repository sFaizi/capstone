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
