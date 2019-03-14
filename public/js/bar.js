// About Scroll
$(function() {
	var controller = new ScrollMagic.Controller();
	var aboutTween = new TweenMax.to("#about-content", 1, {
		opacity: 1, 
		marginLeft: "0"
	});
	var containerScene = new ScrollMagic.Scene({
		triggerElement: "#aboutTrig",
		offset: "-150"
	})
	.setTween(aboutTween)
	// .addIndicators()
	.addTo(controller);
});

// Menu Scroll
$(function() {
	var controller = new ScrollMagic.Controller();
	var menuTween = new TweenMax.to("#menuTrig", 1, {
		opacity: 1
	});
	var containerScene = new ScrollMagic.Scene({
		triggerElement: "#menuTrig",
		offset: "-150"
	})
	.setTween(menuTween)
	// .addIndicators()
	.addTo(controller);
});

// Return arrow

$(function() {
	var controller = new ScrollMagic.Controller();
	var menuTween = new TweenMax.to("#up-btn", 1, {
		opacity: 1
	});
	var containerScene = new ScrollMagic.Scene({
		triggerElement: "#aboutTrig",
		offset: "-150"
	})
	.setTween(menuTween)
	// .addIndicators()
	.addTo(controller);
});