$(document).ready(function () {
    var menuUl = $('header ul');
    var menu = $('.fa-bars');
    var croix = $('.fa-times');

    menu.on('click',function () {
        menuUl.toggleClass('active');
    });
    croix.on('click',function () {
        menuUl.toggleClass('active');
    });
});