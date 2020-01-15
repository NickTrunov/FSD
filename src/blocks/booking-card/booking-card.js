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