window.onload = function() {
    if (localStorage.getItem('myStorage') == null) {
        localStorage.setItem('myStorage', JSON.stringify(mainProduce));
    } else {
        mainProduce = JSON.parse(localStorage.getItem('myStorage'));
    }

    //show home
    changeMenu(document.getElementById('home'));
    changeLogstatus();
};