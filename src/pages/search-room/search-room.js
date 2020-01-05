import './search-room.scss';
import '../main-layout/main-layout';
import '../../blocks/image-card/image-card';
import '../../blocks/pagination/pagination';
import '../../blocks/configuration-dropdown/configuration-dropdown';
import '../../blocks/checkbox/checkbox';
import '../../blocks/expander/expander';
import '../../blocks/range-dates/range-dates';
import '../../blocks/calendar/calendar';

$('#guests').dropdown({
    title: 'гости',
    show: false,
    singular: false,
    placeholder: '3 гостя, 1 младенец',
    elements: [
        {
            title: 'взрослые',
            value: 3
        },
        {
            title: 'младенцы',
            value: 1
        }
    ]
});

$('#features').dropdown({
    title: 'удобства номера',
    show: false,
    singular: false,
    buttons: false,
    placeholder: '2 спальни, 2 кровати...',
    elements: [
        {
            title: 'спальни',
            value: 2
        },
        {
            title: 'кровати',
            value: 2
        },
        {
            title: 'ванные комнаты',
            value: 0
        }
    ]
});