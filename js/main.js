$(document).ready(function(){
	var reasons = [
		{'text': 'You also eat brunch at 2 p.m.', 'image': 'http://media.giphy.com/media/xQrz8krDeKXIs/giphy.gif'},
		{'text':'World', 'image':'http://media.giphy.com/media/xQrz8krDeKXIs/giphy.gif'},
		{'text':'Because you teach me to code', 'image':'http://media.giphy.com/media/xQrz8krDeKXIs/giphy.gif'},
		{'text':'We both freak out about dogs', 'image':'http://media.giphy.com/media/xQrz8krDeKXIs/giphy.gif'},
	];
	if (window.location.hash){
		var id = window.location.hash.replace('#','');
	} else{
		var id = Math.floor(Math.random() * reasons.length);
	}
	var reason = reasons[id];
	$('#reason').text(reason.text);
	$('#reason-image').html('<img src="' + reason.image + '">');
	$('.twitter-share-button').attr('data-text','This is why we\'re friends: ' + reason.text);
	$('.twitter-share-button').attr('data-url','http://thisiswhywerefriends.com/#' + id);
});