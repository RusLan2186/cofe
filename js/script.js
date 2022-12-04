// ................BURGER................................................

$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.header__burger').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.header__burger, .header__menu').toggleClass('active');
      // при открытом бургере блокируем прокрутку страницы
      $('body').toggleClass('lock');
   });
});

// закрытие бургера, при нажатии на меню
const headerLinks = document.querySelectorAll('.header__menu')
headerLinks.forEach((el) => {
   el.addEventListener('click', () => {
      $('.header__burger,.header__menu').toggleClass('active');
   })
})

// ........................................ТАБЫ ....................................................................
$(document).ready(function () {
   $('.menu-page__tabs_link').click(function (e) {
      e.preventDefault()

      // класс где лежать ссылки(табы)
      // 2класс - тело, где лежить контент
      $('.menu-page__tabs_link').removeClass('menu-page__tabs_link--active');
      $('.tabs-block').removeClass('tabs-block--active');

      $(this).addClass('menu-page__tabs_link--active');
      $($(this).attr('href')).addClass('tabs-block--active')

   });
   $('.menu-page__tabs_link:first').click();

});


// спойлер-аккордион 
$(document).ready(function () {
   // ссылка, на которую нажимаем 
   $('.menu-page__spoiler_link').click(function (event) {
      // общий класс спойлера
      if ($('.menu-page__spoiler').hasClass('one')) {
         // ссылка, на которую нажимаем 
         $('.menu-page__spoiler_link').not($(this)).removeClass('hidden');
         // блок который идет сразу после ссылки
         $('.tabs-block').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('hidden').next().slideToggle(300);
   });
});