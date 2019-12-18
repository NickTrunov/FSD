import './header.scss';
import '../menu/menu';
import '../rounded-button/rounded-button';
import '../button/button';
import '../menu-toggle/menu-toggle';

$('#toggle').click( e => {
    $('#menu').toggleClass('menu--open');
});

$('#toggle--logged').click( e => {
    $('#menu--logged').toggleClass('menu--open');
});