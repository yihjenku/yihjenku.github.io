window.onload=function() {

	var bubbles = document.querySelectorAll('circle');

	function cascade() {
		for(var i=0; i<bubbles.length; i++){
			bubbles[i] = function() {
				this.setAttribute("class", "text");
			}
			setTimeout(func, i*100);
		}

		for(var i=0; i<bubbles.length; i++){
			bubbles[i] = function() {
				this.setAttribute("class", "letter");
			}
			setTimeout(func, i*100);
		}

	}

	cascadeTimeout = setInterval(cascade, 6000);

}