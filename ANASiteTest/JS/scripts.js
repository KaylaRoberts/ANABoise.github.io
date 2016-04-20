

$(window).scroll(function() {

	var hContainerHeight = $('.header').height() - 100;
	var h2ContainerHeight = $('#helpTitleSection').height() + 400;
	var eContainerHeight = $('#eventsTitleSection').height() + 2500;
	var cContainerHeight = $('#contactTitleSection').height() + 3500;
	var wScroll = $(window).scrollTop();


	console.log(h2ContainerHeight)
	console.log(wScroll)


	if (wScroll >= hContainerHeight) {

		/*$('.heroSection').css({transform: 'translate(0px, '+ wScroll / 40 +'%)'})
		$('.heroSection h1').css({transform: 'translate(0px, '+ wScroll / -30 +'%)'})*/

		$('.heroSection').css({transform: 'translate(0px, '+ wScroll / 20 +'%)'})
		$('.heroSection h1').css({transform: 'translate(0px, '+ wScroll / -5 +'%)'})
		/*$('.aboutSection #paper #row1 #picture').css({'background-size' : 'calc(100% + '+ (wScroll + 100) / 70 +'%)'})*/

	};

	if (wScroll >= h2ContainerHeight) {

		
		$('#helpTitle').css({transform: 'translate(0px, '+ (wScroll - 1200) / -30 +'%)'})
		$('.aboutSection #paper').css({transform: 'translate(0px, '+ (wScroll - 1000) / -40 +'%)'})
	};

	if (wScroll >= (h2ContainerHeight + 500)) {

		$('#helpTitleSection').css({transform: 'translate(0px, '+ (wScroll - 1700) / 12 +'%)'})

	};

	if (wScroll >= eContainerHeight) {

		$('#eventsTitleSection').css({transform: 'translate(0px, '+ (wScroll - 3500) / 30 +'%)'})

	};

	if (wScroll >= eContainerHeight + 700) {

		
		$('#eventsTitle').css({transform: 'translate(0px, '+ (wScroll - 4000) / 30 +'%)'})

	};

	if (wScroll >= eContainerHeight) {

		$('#contactTitleSection').css({transform: 'translate(0px, '+ (wScroll - 5000) / -30 +'%)'})
		
	};

	if (wScroll >= eContainerHeight + 300) {

		$('#contactTitle').css({transform: 'translate(0px, '+ (wScroll - 5000) / 15 +'%)'})
		
	};

	if ( $(window).scrollTop() >= (($('.contactSection #paper').offset().top) - 100) ) {
        
		$('html').css({'background-color' : '#4ab4be'})

    } else {

    	$('html').css({'background-color' : 'white'})

    }

})

$(function() {
  			$('a[href*=#]:not([href=#])').click(function() {
   			 if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      			var target = $(this.hash);
      			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      		if (target.length) {
        	$('html,body').animate({
          	scrollTop: target.offset().top
        	}, 1000);
        	return false;
      }
    }
  });
});

$('#row1 a').mouseenter(function() {

	$('#row1 p').addClass('moved');
	$('#row1 #overlay').addClass('moved');

})

$('#row2 a').mouseenter(function() {

	$('#row2 p').addClass('moved');
	$('#row2 #overlay').addClass('moved');

})

$('#row3 a').mouseenter(function() {

	$('#row3 p').addClass('moved');
	$('#row3 #overlay').addClass('moved');

})

$('#row4 a').mouseenter(function() {

	$('#row4 p').addClass('moved');
	$('#row4 #overlay').addClass('moved');

})

$('#row1 a').mouseleave(function() {

	$('#row1 p').removeClass('moved');
	$('#row1 #overlay').removeClass('moved');

})

$('#row2 a').mouseleave(function() {

	$('#row2 p').removeClass('moved');
	$('#row2 #overlay').removeClass('moved');

})

$('#row3 a').mouseleave(function() {

	$('#row3 p').removeClass('moved');
	$('#row3 #overlay').removeClass('moved');

})

$('#row4 a').mouseleave(function() {

	$('#row4 p').removeClass('moved');
	$('#row4 #overlay').removeClass('moved');

})