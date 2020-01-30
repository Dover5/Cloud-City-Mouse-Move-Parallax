window.onload = () => {
	let wrapper = document.querySelector('.wrapper'),
		layerOne = document.querySelector('.layer-1'),
		layerTwo = document.querySelector('.layer-2');
		layerFour = document.querySelector('.layer-4');
		layerFive = document.querySelector('.layer-5');
		layerThree = document.querySelector('.layer-3');
		layerSix = document.querySelector('.layer-6');
		layerSeven = document.querySelector('.layer-7');
		layerEight = document.querySelector('.layer-8');
		layerNine = document.querySelector('.layer-9');
		layerTen = document.querySelector('.layer-10');
		layerElev = document.querySelector('.layer-11');
		layerTwelv = document.querySelector('.layer-12');
		layerThrt = document.querySelector('.layer-13');
		layerFort = document.querySelector('.layer-14');
		layerFift = document.querySelector('.layer-15');
		layerSixt = document.querySelector('.layer-16');

	wrapper.addEventListener('mousemove',function(e){
		let pageX = e.clientX,
			pageY = e.clientY;
		layerOne.style.webkitTransform = 'translateX(' + pageX/-1500 + '%) translateY(' + pageY/-1500 + '%)';
		layerOne.style.transform = 'translateX(' + pageX/-1500 + '%) translateY(' + pageY/-1500 + '%)';
		layerTwo.style.webkitTransform = 'translateX(' + pageX/-12000 + '%) translateY(' + pageY/12000 + '%)';
		layerTwo.style.transform = 'translateX(' + pageX/-12000 + '%) translateY(' + pageY/-9000 + '%)';
		layerFour.style.webkitTransform = 'translateX(' + pageX/-1500 + '%) translateY(' + pageY/-1500 + '%)';
		layerFour.style.transform = 'translateX(' + pageX/-1500 + '%) translateY(' + pageY/-1500 + '%)';
		layerFive.style.webkitTransform = 'translateX(' + pageX/-3000 + '%) translateY(' + pageY/-1550 + '%)';
		layerFive.style.transform = 'translateX(' + pageX/-3000 + '%) translateY(' + pageY/-1550 + '%)';
		layerThree.style.webkitTransform = 'translateX(' + pageX/35000 + '%) translateY(' + pageY/35000 + '%)';
		layerThree.style.transform = 'translateX(' + pageX/35000 + '%) translateY(' + pageY/35000 + '%)';
		layerSix.style.webkitTransform = 'translateX(' + pageX/-0 + '%) translateY(' + pageY/0 + '%)';
		layerSix.style.transform = 'translateX(' + pageX/-0 + '%) translateY(' + pageY/0 + '%)';
		layerSeven.style.webkitTransform = 'translateX(' + pageX/-500 + '%) translateY(' + pageY/-550 + '%)';
		layerSeven.style.transform = 'translateX(' + pageX/-500 + '%) translateY(' + pageY/-550 + '%)';
		layerEight.style.webkitTransform = 'translateX(' + pageX/0 + '%) translateY(' + pageY/0 + '%)';
		layerEight.style.transform = 'translateX(' + pageX/0 + '%) translateY(' + pageY/0 + '%)';
		layerNine.style.webkitTransform = 'translateX(' + pageX/35000 + '%) translateY(' + pageY/35000 + '%)';
		layerNine.style.transform = 'translateX(' + pageX/35000 + '%) translateY(' + pageY/35000 + '%)';
		layerTen.style.webkitTransform = 'translateX(' + pageX/-10000 + '%) translateY(' + pageY/-7000 + '%)';
		layerTen.style.transform = 'translateX(' + pageX/-10000 + '%) translateY(' + pageY/-7000 + '%)';
		layerElev.style.webkitTransform = 'translateX(' + pageX/35000 + '%) translateY(' + pageY/35000 + '%)';
		layerElev.style.transform = 'translateX(' + pageX/35000 + '%) translateY(' + pageY/35000 + '%)';
		layerTwelv.style.webkitTransform = 'translateX(' + pageX/-1500 + '%) translateY(' + pageY/-1500 + '%)';
		layerTwelv.style.transform = 'translateX(' + pageX/-1500 + '%) translateY(' + pageY/-1500 + '%)';
		layerThrt.style.webkitTransform = 'translateX(' + pageX/-1500 + '%) translateY(' + pageY/-1500 + '%)';
		layerThrt.style.transform = 'translateX(' + pageX/-1500 + '%) translateY(' + pageY/-1500 + '%)';
		layerFort.style.webkitTransform = 'translateX(' + pageX/-1500 + '%) translateY(' + pageY/-1500 + '%)';
		layerFort.style.transform = 'translateX(' + pageX/-1500 + '%) translateY(' + pageY/-1500 + '%)';
		layerFift.style.webkitTransform = 'translateX(' + pageX/-1500 + '%) translateY(' + pageY/-1500 + '%)';
		layerFift.style.transform = 'translateX(' + pageX/-1500 + '%) translateY(' + pageY/-1500 + '%)';
		layerSixt.style.webkitTransform = 'translateX(' + pageX/-1500 + '%) translateY(' + pageY/-1500 + '%)';
		layerSixt.style.transform = 'translateX(' + pageX/-1500 + '%) translateY(' + pageY/-1500 + '%)';
		wrapper.style = 'background-position:'+ pageX/-200 +'px center';
	});
}