!(function(window, document, undefined) {

    window.addEventListener('DOMContentLoaded', function() {
        startApp();
    });

    const startApp = function() {
        header();

    };



    const header = function() {
        const header = document.querySelector('header')
        window.addEventListener('scroll', function() {
            document.body.classList.toggle('scrolled', window.scrollY > 40);
            header.classList.toggle('--sticky', window.scrollY > 40);
        });

        header.querySelector('.header__burger').addEventListener('click', function(e) {
            e.preventDefault();

            e.currentTarget.classList.toggle('--active');
            header.querySelector('.header__menu').classList.toggle('--active');

        });

        const menu = header.querySelector('.header__menu');
        [...header.querySelectorAll('.menu__forward')].forEach(function(elm)  {
            elm.addEventListener('click', function(e) {
                function parent(elm) {
                    return elm.nodeName === 'LI' ? elm : parent(elm.parentNode);
                } ;

                const move = menu.dataset.transform = menu.dataset.transform + 100;
                menu.style.transform = 'translateX(-'+move+'%)';

                let parentNode = parent(elm);
                parentNode.querySelector('ul').style.display = 'block';
            });
        });

        [...header.querySelectorAll('.menu__back')].forEach(function(elm) {
            elm.addEventListener('click', function(e) {
                const move = menu.dataset.transform = menu.dataset.transform - 100;
                menu.style.transform = 'translateX(-'+move+'%)';

                elm.parentNode.parentNode.style.display = 'none';
            })
        })
    }

}(window, document, undefined));