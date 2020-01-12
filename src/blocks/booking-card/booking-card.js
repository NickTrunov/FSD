import './booking-card.scss';
import '../card-canvas/card-canvas';
import '../apartment-info/apartment-info';
import '../price/price';
import '../range-dates/range-dates';
import '../configuration-dropdown/configuration-dropdown';
import '../long-button/long-button';
import '../invoice/invoice';
import Calendar from '../calendar/calendar';

Calendar({
    container: $('#booking_calendar'),
    inputs: $('#first_booking_date,#second_booking_date')
})

$('#booking_dropdown').dropdown({
    title: 'Гости',
    placeholder: '3 гостя',
    singular: true,
    buttons: false,
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