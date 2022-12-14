// It's all basiclly the same concept, by using height transition.
// New message starts from hidden (0 height) then transition to normal height
// making it look like smoothly appeared.

//Jquery old smoothscroll. manually creating the moves. this before i learn js.

$('#log>div:last-child').css({
    'opacity': '0',
    'display': 'none'
}).slideDown(300).animate({
    opacity: 1
}, 300);

//Jquery new smoothscroll (simpler using built in methods as i start learning js/jquery better)

$('#log>div').last().hide().slideToggle(600, "easeInOutQuart");


// Alternatively by appending new class. similar stuff. css needs height specified.
// but idk why jquery version doesnt need height i'm still dumb in js maybe its auto idk man i'll learn.

// CSS
// #log>div {
//     max-height: 0px; //height is obviously needed
//     transition: max-height 3s;
// }
// .show {
//     max-height: 150px; //height is obviously needed
// }

//then append new class via js.

$('#log>div').last().addClass('show');
