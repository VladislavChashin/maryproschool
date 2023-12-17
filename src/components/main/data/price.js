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
                        data: teachers[2]
                    },
                    {
                        img:'',
                        teachName: 'Джамилия Аслановна',
                        onePrice: '800 руб.',
                        twoPrice: '4800 руб.',
                        data: teachers[4]
                    },
                ]
            },
            {
                typeLess: 'Парные занятия',
                quant: 'Абонемент (8 занятий)',
                less:[
                    {
                        img:'',
                        teachName: 'Мария Кричевская',
                        onePrice: '1350 руб.',
                        twoPrice: '10000 руб.',
                        data: teachers[0]
                    },
                    {
                        img:'',
                        teachName: 'Ксения Лагутина',
                        onePrice: '1100 руб.',
                        twoPrice: '6400 руб.',
                        data: teachers[2]
                    },
                    {
                        img:'',
                        teachName: 'Джамилия Аслановна',
                        onePrice: '1000 руб.',
                        twoPrice: '6400 руб.',
                        data: teachers[4]
                    },
                ]
            },
            {
                typeLess: 'Индивидуальные занятия',
                quant: 'Абонемент (8 занятий)',
                less:[
                    {
                        img:'',
                        teachName: 'Мария Кричевская',
                        onePrice: '2300 руб.',
                        twoPrice: '17600 руб.',
                        data: teachers[0]
                    },
                    {
                        img:'',
                        teachName: 'Ксения Лагутина',
                        onePrice: '1400 руб.',
                        twoPrice: '10500 руб.',
                        data: teachers[2]
                    },
                    {
                        img:'',
                        teachName: 'Анастасия Болотова',
                        onePrice: '1400 руб.',
                        twoPrice: '10500 руб.',
                        data: teachers[1]
                    },
                    {
                        img:'',
                        teachName: 'Джамилия Аслановна',
                        onePrice: '1400 руб.',
                        twoPrice: '10500 руб.',
                        data: teachers[4]
                    },
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
                        onePrice: '1000₽ руб.',
                        twoPrice: '3600 руб.',
                        data: teachers[1]
                    },
                    {
                        img:'',
                        teachName: 'Мария Кричевская',
                        onePrice: '1250 руб.',
                        twoPrice: '4500 руб.',
                        data: teachers[0]
                    },
                    {
                        img:'',
                        teachName: 'Ксения Лагутина',
                        onePrice: '1000 руб.',
                        twoPrice: '3600 руб.',
                        data: teachers[2]
                    },
                ]
            },
            {
                typeLess: 'Парные занятия',
                quant: 'Абонемент (4 занятийя)',
                less:[
                    {
                        img:'',
                        teachName: 'Мария Кричевская',
                        onePrice: '1500 руб.',
                        twoPrice: '5600 руб.',
                        data: teachers[0]
                    },
                    {
                        img:'',
                        teachName: 'Ксения Лагутина',
                        onePrice: '1200 руб.',
                        twoPrice: '4500 руб.',
                        data: teachers[2]
                    },
                    {
                        img:'',
                        teachName: 'Анастасия Болотова',
                        onePrice: '1200 руб.',
                        twoPrice: '4500 руб.',
                        data: teachers[1]
                    },
                ]
            },
            {
                typeLess: 'Индивидуальные занятия',
                quant: 'Абонемент (4 занятия)',
                less:[
                    {
                        img:'',
                        teachName: 'Мария Кричевская',
                        onePrice: '2200 руб.',
                        twoPrice: '8500 руб.',
                        data: teachers[0]
                    },
                    {
                        img:'',
                        teachName: 'Ксения Лагутина',
                        onePrice: '1400 руб.',
                        twoPrice: '5200 руб.',
                        data: teachers[2]
                    },
                    {
                        img:'',
                        teachName: 'Анастасия Болотова',
                        onePrice: '1400 руб.',
                        twoPrice: '5200 руб.',
                        data: teachers[1]
                    },
                ]
            },
        ]
    },
    {
        nameLess: 'Подготовка к экзаменам (ОГЭ, ЕГЭ, PET, FCE)',
        type:[
            {
                typeLess: 'Групповые занятия(онлайн)',
                quant: 'Абонемент (8 занятий)',
                less:[
                    {
                        img:'',
                        teachName: 'Анастасия Болотова',
                        onePrice: '800 руб.',
                        twoPrice: '6000 руб.',
                        data: teachers[1]
                    }
                ]
            },
            // {
            //     typeLess: 'Групповые занятия(офлайн)',
            //     quant: 'Абонемент (4 занятия)',
            //     less:[
            //         {
            //             img:'',
            //             teachName: 'Павел Кричевский',
            //             onePrice: '900 руб.',
            //             twoPrice: '1400 руб.'
            //         }
            //     ]
            // },
        ]
    },
    // {
    //     nameLess: 'Speaking Club',
    //     type:[
    //         {
    //             typeLess: 'Speaking club (A2-B1)',
    //             quant: 'Абонемент (4 занятия)',
    //             less:[
    //                 {
    //                     img:'',
    //                     teachName: 'Анастасия Болотова',
    //                     onePrice: '700 руб.',
    //                     twoPrice: '2500 руб.'
    //                 }
    //             ]
    //         },
    //         {
    //             typeLess: 'Speaking club (B2-C1)',
    //             quant: 'Абонемент (4 занятия)',
    //             less:[
    //                 {
    //                     img:'',
    //                     teachName: 'Анастасия Болотова',
    //                     onePrice: '800 руб.',
    //                     twoPrice: '3000 руб. '
    //                 }
    //             ]
    //         },
    //     ]
    // },
]

export default price