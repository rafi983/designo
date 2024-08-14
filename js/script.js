//Toggle Mobile menu

document.addEventListener('DOMContentLoaded', function () {
	const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
	const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
	const mobileModal = document.querySelector('.navbar .mobile-menu-modal');
	const hamburgerIcon = document.querySelector('.navbar .hamburger');
	const closeIcon = document.querySelector('.navbar .close');

	toggleButton.addEventListener('click', function () {
		mobileModal.classList.toggle('active');
		mobileMenu.classList.toggle('active');
		hamburgerIcon.classList.toggle('hide');
		closeIcon.classList.toggle('show');
	});

	mobileModal.addEventListener('click', function () {
		mobileModal.classList.toggle('active');
		mobileMenu.classList.toggle('active');
		hamburgerIcon.classList.toggle('hide');
		closeIcon.classList.toggle('show');
	});
});
