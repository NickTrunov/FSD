$('#apartments_dropdown').dropdown({
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