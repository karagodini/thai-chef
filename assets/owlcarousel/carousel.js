jQuery(document).ready(function($) {
    $('.slider-1').owlCarousel({
        // Основные настройки
        items: 1, // Показывать 1 элемент
        loop: true, // Бесконечная карусель
        center: true, // Центрирование активного элемента
        margin: 10, // Отступы
        stagePadding: 0, // Отступы по краям
        
        // Навигация
        nav: true, // Стрелки
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ], // Кастомные иконки
        dots: true, // Точки
        dotsEach: true,
        
        // Автопрокрутка
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        
        // Анимация
        animateOut: 'fadeOut', // fadeOut, slideOut, flipOutX
        animateIn: 'fadeIn', // fadeIn, slideIn, flipInX
        smartSpeed: 800, // Скорость анимации
        
        // Адаптивность
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                dots: true
            }
        },
    });
});

jQuery(document).ready(function($) {
    var slidermedia = $('.slider-media').owlCarousel({
        // Основные настройки
        items: 1, // Показывать 1 элемент
        loop: true, // Бесконечная карусель
        center: true, // Центрирование активного элемента
        margin: 20, // Отступы
        stagePadding: 0, // Отступы по краям
        
        // Навигация
        nav: true, // Стрелки
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ], // Кастомные иконки
        dots: false, // Точки
        dotsEach: false,
        
        // Автопрокрутка
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        
        // Анимация
        animateOut: 'fadeOut', // fadeOut, slideOut, flipOutX
        animateIn: 'fadeIn', // fadeIn, slideIn, flipInX
        smartSpeed: 800, // Скорость анимации
        
        // Адаптивность
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false
            },
            600: {
                items: 1,
                nav: true,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                dots: false
            }
        },
    });

    // Кастомные кнопки
    $('.smprev-slide').click(function() {
        slidermedia.trigger('prev.owl.carousel');
    });

    $('.smnext-slide').click(function() {
        slidermedia.trigger('next.owl.carousel');
    });
    
});

jQuery(document).ready(function($) {
    $('.slider-prod').owlCarousel({
        // Основные настройки
        items: 3.5, // Показывать 1 элемент
        loop: true, // Бесконечная карусель
        center: false, // Центрирование активного элемента
        margin: 20, // Отступы
        stagePadding: 0, // Отступы по краям
        
        // Навигация
        nav: true, // Стрелки
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ], // Кастомные иконки
        dots: true, // Точки
        dotsEach: true,
        
        // Автопрокрутка
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        
        // Анимация
        animateOut: 'fadeOut', // fadeOut, slideOut, flipOutX
        animateIn: 'fadeIn', // fadeIn, slideIn, flipInX
        smartSpeed: 800, // Скорость анимации
        
        // Адаптивность
        responsive: {
            0: {
                items: 1.5,
                nav: false,
                dots: true
            },
            600: {
                items: 1.5,
                nav: false
            },
            1000: {
                items: 3.5,
                nav: true,
                dots: true
            }
        },
    });
});

jQuery(document).ready(function($) {
    $('.slider-part').owlCarousel({
        // Основные настройки
        items: 6.5, // Показывать 1 элемент
        loop: true, // Бесконечная карусель
        center: false, // Центрирование активного элемента
        margin: 20, // Отступы
        stagePadding: 0, // Отступы по краям
        
        // Навигация
        nav: false, // Стрелки
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ], // Кастомные иконки
        dots: false, // Точки
        dotsEach: false,
        
        // Автопрокрутка
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        
        // Анимация
        animateOut: 'fadeOut', // fadeOut, slideOut, flipOutX
        animateIn: 'fadeIn', // fadeIn, slideIn, flipInX
        smartSpeed: 800, // Скорость анимации
        
        // Адаптивность
        responsive: {
            0: {
                items: 3,
                nav: false,
                dots: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 6.5,
                nav: false,
                dots: false
            }
        },
    });
});