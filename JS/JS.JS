// 1$("img").click(function(event) {
// 	$(this).attr('src', 'https://www.tourdom.ru/upload/iblock/404/404fddb2797c033b087c4247630b2db7.jpg');
	
// });

// parent() доступ к радителю 
// parents() доступ ко всем радителям 
// children() доступ к дочерним элементам
// prev доступ к придетущий элемент
// prevAll доступ ко всем придетущим элементам
// next следующий

//     $("div").click(function(event) {
// 	event.preventDefault();
// 	console.log($(this).children())
// 	$(this).next().addClass('border')
// });

$("div").click(function(event) {
	$(this).find('.class').addClass('border')
});