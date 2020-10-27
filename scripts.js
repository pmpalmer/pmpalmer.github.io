// Modal form toggle functionality
window.onload = function() {
	var buttons = Array.from(document.getElementsByClassName('button'));
	var content = document.getElementById('content');
	var contact = document.getElementById('contact');
	
	buttons.forEach( function(button) {
		button.onclick = function() {
		    var div = document.getElementById('contact');
		    if (!div.classList.contains('active')) {
		    	div.classList.add('active');
		    	content.setAttribute('aria-hidden', 'true');
		    	contact.setAttribute('aria-hidden', 'false');
		    } else {
		    	div.classList.remove('active');
		    	content.setAttribute('aria-hidden', 'false');
		    	contact.setAttribute('aria-hidden', 'true');
		    }
		};
	});
};