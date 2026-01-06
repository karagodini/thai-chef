document.addEventListener('DOMContentLoaded', function() {
            const dropdownToggle = document.querySelector('.dropdown-toggle');
            const dropdownContent = document.querySelector('.dropdown-content');
            
            function toggleDropdown() {
                dropdownContent.classList.toggle('show');
                dropdownToggle.classList.toggle('active');
            }
            
            dropdownToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggleDropdown();
            });
            
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.dropdown')) {
                    dropdownContent.classList.remove('show');
                    dropdownToggle.classList.remove('active');
                }
            });
            
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    dropdownContent.classList.remove('show');
                    dropdownToggle.classList.remove('active');
                }
            });
        });

/*форма*/
const forForm = document. querySelector('.for_from')
const containerForm = document. querySelector('.container-form')
forForm.addEventListener('click', function(e) {
    e.preventDefault()
    containerForm.style.display = 'flex'
} )
/*end форма*/

    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.smprev-slide');
        
        buttons.forEach(button => {
            const img = button.querySelector('img');
            const normalSrc = button.getAttribute('data-normal');
            const hoverSrc = button.getAttribute('data-hover');
            
            // Если нет hover-изображения, используем ту же картинку с фильтром
            const actualHoverSrc = hoverSrc || normalSrc;
            
            button.addEventListener('mouseenter', function() {
                img.src = actualHoverSrc;
                img.style.transform = 'rotateY(-180deg)'; // Добавляем эффект
            });
            
            button.addEventListener('mouseleave', function() {
                img.src = normalSrc;
                img.style.transform = '';
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const buttonsNexts = document.querySelectorAll('.smnext-slide');
        
        buttonsNexts.forEach(buttonsNext => {
            const img = buttonsNext.querySelector('img');
            const normalSrc = buttonsNext.getAttribute('data-normal');
            const hoverSrc = buttonsNext.getAttribute('data-hover');
            
            // Если нет hover-изображения, используем ту же картинку с фильтром
            const actualHoverSrc = hoverSrc || normalSrc;
            
            buttonsNext.addEventListener('mouseenter', function() {
                img.src = actualHoverSrc;
                img.style.transform = 'rotateY(-180deg)'; // Добавляем эффект
            });
            
            buttonsNext.addEventListener('mouseleave', function() {
                img.src = normalSrc;
                img.style.transform = '';
            });
        });
    });

/*mobile menu*/
document.addEventListener('DOMContentLoaded', function() {
    const menuOpen = document.querySelector('.menu-open');
    const menuClose = document.querySelector('.menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuOpen.addEventListener('click', function(e) {
        e.preventDefault()
        mobileMenu.style.display = 'block'
        menuOpen.style.display = 'none'
        menuClose.style.display = 'block'
    })

    menuClose.addEventListener('click', function(e) {
        e.preventDefault()
        mobileMenu.style.display = 'none'
        menuOpen.style.display = 'block'
        menuClose.style.display = 'none'
    })
})
/*end mobile menu*/

/*mobile dop menu*/
document.addEventListener('DOMContentLoaded', function() {
    const dopMenuBtn = document.querySelector('.dop-menu-btn');
    const dopMenus = document.querySelectorAll('.dop-menu');
    
    function toggleDropdown() {
        // Перебираем все элементы dop-menu и добавляем/удаляем класс show
        dopMenus.forEach(menu => {
            menu.classList.toggle('show');
        });
        dopMenuBtn.classList.toggle('active');
    }
    
    dopMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleDropdown();
    });
    
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            // Удаляем класс show у всех меню
            dopMenus.forEach(menu => {
                menu.classList.remove('show');
            });
            dopMenuBtn.classList.remove('active');
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Удаляем класс show у всех меню
            dopMenus.forEach(menu => {
                menu.classList.remove('show');
            });
            dopMenuBtn.classList.remove('active');
        }
    });
});
/*end mobile dop menu*/