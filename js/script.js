    function menuShow() {
        let menuMobile = document.querySelector('.mobile-cabecalho')
        if (menuMobile.classList.contains('open')){
            menuMobile.classList.remove('open')
            document.querySelector('.icon').src = "assets/menu-icon.png"
        } else {
            menuMobile.classList.add('open')
            document.querySelector('.icon').src = "assets/icon-fechar.png"
        }
    }
