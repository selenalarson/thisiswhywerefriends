$(document).ready(function(){
	var reasons = [
		{'text': 'You also eat brunch at 2 p.m.', 'image': 'http://media.giphy.com/media/W9RcWkSqUR5EA/giphy.gif'},
		{'text':'Our bae dates are better than real dates', 'image':'http://media.giphy.com/media/xQrz8krDeKXIs/giphy.gif'},
		{'text':'Because you teach me to code', 'image':'http://i.imgur.com/Hfzf14T.gif'},
		{'text':'We both freak out about dogs', 'image':'http://media.giphy.com/media/xQrz8krDeKXIs/giphy.gif'},
		{'text':'I literally can\'t get rid of you', 'image':'http://media2.giphy.com/media/yIulHNio75fTG/giphy.gif'},
		{'text':'Our content is out of control', 'image':'http://media.giphy.com/media/tbdhUoUl6dcLm/giphy.gif'},
	];
	var id = window.location.hash.replace('#','');
	if (id === '' || id > reasons.length - 1){
		id = Math.floor(Math.random() * reasons.length);
	}
	var reason = reasons[id];
	$('#reason').text(reason.text);
	$('#reason-image').html('<img src="' + reason.image + '">');
	$('.twitter-share-button').attr('data-text','This is why we\'re friends: ' + reason.text);
	$('.twitter-share-button').attr('data-url','http://thisiswhywerefriends.com/#' + id);
});