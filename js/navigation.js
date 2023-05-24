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
