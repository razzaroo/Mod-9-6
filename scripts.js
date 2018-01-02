var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	list.appendChild(element);
	var listLength = document.getElementsByTagName('li').length;
	element.innerHTML = 'item ' + (listLength - 1);
});

