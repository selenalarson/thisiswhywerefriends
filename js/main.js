$(document).ready(function(){
	var reasons = [
		{'text': 'Hello', 'image': 'http://media.giphy.com/media/xQrz8krDeKXIs/giphy.gif'},
		{'text':'World', 'image':'http://media.giphy.com/media/xQrz8krDeKXIs/giphy.gif'},
		{'text':'Because you teach me to code', 'image':'http://media.giphy.com/media/xQrz8krDeKXIs/giphy.gif'},
		{'text':'We both freak out about dogs', 'image':'http://media.giphy.com/media/xQrz8krDeKXIs/giphy.gif'},
	];
	var reason = reasons[Math.floor(Math.random() * reasons.length)];
	$('#reason').text(reason.text);
	$('#reason-image').html('<img src="' + reason.image + '">');
});