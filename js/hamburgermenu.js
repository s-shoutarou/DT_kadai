$(function () {

	$('.hamburgermenu').on('click', function () {

		$('header').toggleClass('active')
		$('.hamburgermenu').toggleClass('active');
		$('.hidden-menu').toggleClass('open');
		$('.js-click-menu').toggleClass('active');

		//メニューの高さ決め
		let wH = $(window).height() - 40; //padding分マイナス
		$('.js-click-menu').css('height', wH + 'px')
	})


})
