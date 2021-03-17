// $('.toggle-icon').click(function() {
//     $('.menu-overlay').toggleClass('active');

//     if($('.menu-overlay').hasClass('active')) {
//         $('.material-icons').text('menu_open');
//     } else {
//         $('.material-icons').text('menu');
//     }
// });

///// Переводим в чистый JS /////

// находим блоки с такими классами
const toggleIcon = document.querySelector('.toggle-icon');
const menuOverlay = document.querySelector('.menu-overlay');
const materialIcons = document.querySelector('.material-icons');

// добавляем событие по клику
toggleIcon.addEventListener('click', function() {
    menuOverlay.classList.toggle('active');

    if(menuOverlay.classList.contains('active')) {
        materialIcons.textContent = 'menu_open';
    } else {
        materialIcons.textContent = 'menu';
    }
});

///////////////////////   СРАВНЕНИЯ:   //////////////////
 // |   JQuery   |     &&     |   Чистый JavaScript   |
 // $('.toggle-icon')           document.querySelector('.toggle-icon')
 //  .toggleClass()             .classList.toggle()
 //  .hasClass()                .classList.contains()
 //  .text()                    .textContent = ''
