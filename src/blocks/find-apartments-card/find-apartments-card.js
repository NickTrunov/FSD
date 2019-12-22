import './find-apartments-card.scss';
import '../card-canvas/card-canvas';
import '../range-dates/range-dates';
import '../configuration-dropdown/configuration-dropdown';
import '../long-button/long-button';
import Calendar from '../calendar/calendar';

Calendar({
    container: $('#calendar'),
    inputs: $('#first_date,#second_date')
})


$('#dd').dropdown({
    title: 'Гости',
    placeholder: 'Сколько гостей',
    singular: true,
    buttons: true,
    show: false,
    mapNames: ['гость', 'гостя', 'гостей'],
    elements: [
        {
            title: 'взрослые',
            value: 2
        },
        {
            title: 'дети',
            value: 1
        },
        {
            title: 'младенцы',
            value: 0
        }
    ]
});