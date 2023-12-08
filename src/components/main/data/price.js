import {teachers} from './teachers.js'

const price = [
    {
        nameLess: 'Занятия для детей',
        type:[
            {
                typeLess: 'Групповые занятия',
                quant: 'Абонемент (8 занятий)',
                less:[
                    {
                        img:'',
                        teachName: 'Мария Кричевская',
                        onePrice: '1000 руб.',
                        twoPrice: '7200 руб.',
                        data: teachers[0]
                    },
                    {
                        img:'',
                        teachName: 'Ксения Лагутина',
                        onePrice: '800 руб.',
                        twoPrice: '4800 руб.',
                        data: teachers[1]
                    }
                ]
            },
            {
                typeLess: 'Парные занятия',
                quant: 'Абонемент (8 занятий)',
                less:[
                    {
                        img:'',
                        teachName: 'Мария Кричевская',
                        onePrice: '1250 руб.',
                        twoPrice: '9500 руб.'
                    },
                    {
                        img:'',
                        teachName: 'Ксения Лагутина',
                        onePrice: '1100 руб.',
                        twoPrice: '6400 руб.'
                    }
                ]
            },
            {
                typeLess: 'Индивидуальные занятия',
                quant: 'Абонемент (8 занятий)',
                less:[
                    {
                        img:'',
                        teachName: 'Мария Кричевская',
                        onePrice: '2200 руб.',
                        twoPrice: '17000 руб.'
                    },
                    {
                        img:'',
                        teachName: 'Ксения Лагутина',
                        onePrice: '1400 руб.',
                        twoPrice: '8800 руб.'
                    }
                ]
            },
        ]
    },
    {
        nameLess: 'Занятия для взрослых',
        type:[
            {
                typeLess: 'Групповые занятия',
                quant: 'Абонемент (4 занятия)',
                less:[
                    {
                        img:'',
                        teachName: 'Анастасия Болотова',
                        onePrice: '1400 руб.',
                        twoPrice: '1400 руб.'
                    }
                ]
            },
            {
                typeLess: 'Групповые занятия',
                quant: 'Абонемент (4 занятия)',
                less:[
                    {
                        img:'',
                        teachName: 'Мария Кричевская',
                        onePrice: '1400 руб.',
                        twoPrice: '1400 руб.'
                    }
                ]
            },
        ]
    },
    {
        nameLess: 'Подготовка к экзаменам (ОГЭ, ЕГЭ, PET, FCE)',
        type:[
            {
                typeLess: 'vГрупповые занятия',
                quant: 'Абонемент (4 занятия)',
                less:[
                    {
                        img:'',
                        teachName: 'Анастасия Болотова',
                        onePrice: '1400 руб.',
                        twoPrice: '1400 руб.'
                    }
                ]
            },
            {
                typeLess: 'Групповые занятия',
                quant: 'Абонемент (4 занятия)',
                less:[
                    {
                        img:'',
                        teachName: 'Павел Кричевский',
                        onePrice: '1400 руб.',
                        twoPrice: '1400 руб.'
                    }
                ]
            },
        ]
    },
    {
        nameLess: 'Speaking Club',
        type:[
            {
                typeLess: 'Групповые занятия',
                quant: 'Абонемент (4 занятия)',
                less:[
                    {
                        img:'',
                        teachName: 'Анастасия Болотова',
                        onePrice: '1400 руб.',
                        twoPrice: '1400 руб.'
                    }
                ]
            },
            {
                typeLess: 'Групповые занятия',
                quant: 'Абонемент (4 занятия)',
                less:[
                    {
                        img:'',
                        teachName: 'Анастасия Болотова',
                        onePrice: '1400 руб.',
                        twoPrice: '1400 руб. '
                    }
                ]
            },
        ]
    },
]

export default price