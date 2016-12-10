jQuery(

	function($){
  		$(".title").click(function() {
    		$('html,body').animate({
        		scrollTop: $("#Intro").offset().top}, 'slow');
  	});

  	function preload(arrayOfImages) {
    	$(arrayOfImages).each(function(){
        	$('<img/>')[0].src = this;
    	});
	}

	preload([
	    'static/img/Varsity.jpg',
	    'static/img/John.jpg',
	    'static/img/Twist.jpg',
	    'static/img/Jeff.jpg',
	    'static/img/Colin.jpg',
	    'static/img/Will.jpg',
	    'static/img/Jenson.jpg',
	    'static/img/Dave.jpg',
	    'static/img/Ben.jpg',
	    'static/img/Nich.jpg'
	]);

});




