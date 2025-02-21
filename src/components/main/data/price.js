import {teachers} from './teachers.js'
import women1 from '../../../source/images/main/women1о.png'
import women2 from '../../../source/images/main/oval.png'
import women3 from '../../../source/images/main/women3o.png'
import women4 from '../../../source/images/main/women4o.png'
import women5 from '../../../source/images/main/women5o.png'

export const price_eng = [
    
    {
        nameLess: 'Занятия для детей',
        type:[
            {
                typeLess: 'Групповые занятия',
                quant: 'Абонемент (8 занятий)',
                less:[
                    {
                        img: women2,
                        teachName: 'Мария Кричевская',
                        onePrice: '1000 руб.',
                        twoPrice: '7200 руб.',
                        data: teachers[0]
                    },
                    {
                        img: women3,
                        teachName: 'Ксения Лагутина',
                        onePrice: '800 руб.',
                        twoPrice: '4800 руб.',
                        data: teachers[2]
                    },
                    {
                        img:women4,
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
                        img: women2,
                        teachName: 'Мария Кричевская',
                        onePrice: '1350 руб.',
                        twoPrice: '10000 руб.',
                        data: teachers[0]
                    },
                    {
                        img: women3,
                        teachName: 'Ксения Лагутина',
                        onePrice: '1100 руб.',
                        twoPrice: '6400 руб.',
                        data: teachers[2]
                    },
                    {
                        img: women4,
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
                        img: women2,
                        teachName: 'Мария Кричевская',
                        onePrice: '2300 руб.',
                        twoPrice: '17600 руб.',
                        data: teachers[0]
                    },
                    {
                        img: women3,
                        teachName: 'Ксения Лагутина',
                        onePrice: '1400 руб.',
                        twoPrice: '10500 руб.',
                        data: teachers[2]
                    },
                    {
                        img: women1,
                        teachName: 'Анастасия Болотова',
                        onePrice: '1400 руб.',
                        twoPrice: '10500 руб.',
                        data: teachers[1]
                    },
                    {
                        img: women4,
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
                        img: women1,
                        teachName: 'Анастасия Болотова',
                        onePrice: '1000₽ руб.',
                        twoPrice: '3600 руб.',
                        data: teachers[1]
                    },
                    {
                        img: women2,
                        teachName: 'Мария Кричевская',
                        onePrice: '1250 руб.',
                        twoPrice: '4500 руб.',
                        data: teachers[0]
                    },
                    {
                        img: women3,
                        teachName: 'Ксения Лагутина',
                        onePrice: '1000 руб.',
                        twoPrice: '3600 руб.',
                        data: teachers[2]
                    },
                ]
            },
            {
                typeLess: 'Парные занятия',
                quant: 'Абонемент (4 занятия)',
                less:[
                    {
                        img: women2,
                        teachName: 'Мария Кричевская',
                        onePrice: '1500 руб.',
                        twoPrice: '5600 руб.',
                        data: teachers[0]
                    },
                    {
                        img: women3,
                        teachName: 'Ксения Лагутина',
                        onePrice: '1200 руб.',
                        twoPrice: '4500 руб.',
                        data: teachers[2]
                    },
                    {
                        img: women1,
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
                        img: women2,
                        teachName: 'Мария Кричевская',
                        onePrice: '2200 руб.',
                        twoPrice: '8500 руб.',
                        data: teachers[0]
                    },
                    {
                        img: women3,
                        teachName: 'Ксения Лагутина',
                        onePrice: '1400 руб.',
                        twoPrice: '5200 руб.',
                        data: teachers[2]
                    },
                    {
                        img: women1,
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
                        img: women1,
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
            //             img: women3,
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
    //                     img: women3,
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
    //                     img: women3,
    //                     teachName: 'Анастасия Болотова',
    //                     onePrice: '800 руб.',
    //                     twoPrice: '3000 руб. '
    //                 }
    //             ]
    //         },
    //     ]
    // },
]
export const price_italy = [
    
    {
        nameLess: 'Занятия для детей',
        type:[
            {
                typeLess: 'Групповые занятия',
                quant: 'Абонемент (4 занятия)',
                less:[
                    {
                        img: women2,
                        teachName: 'Мария Кричевская',
                        onePrice: '1250 руб.',
                        twoPrice: '4500 руб.',
                        data: teachers[0]
                    },
                    {
                        img: women1,
                        teachName: 'Анастасия Болотова',
                        onePrice: '1000 руб.',
                        twoPrice: '3600 руб.',
                        data: teachers[1]
                    },
                ]
            },
            {
                typeLess: 'Парные занятия',
                quant: 'Абонемент (4 занятия)',
                less:[
                    {
                        img: women2,
                        teachName: 'Мария Кричевская',
                        onePrice: '1500 руб.',
                        twoPrice: '5600 руб.',
                        data: teachers[0]
                    },
                    {
                        img: women1,
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
                        img: women2,
                        teachName: 'Мария Кричевская',
                        onePrice: '2200 руб.',
                        twoPrice: '8000 руб.',
                        data: teachers[0]
                    },
                    {
                        img: women1,
                        teachName: 'Анастасия Болотова',
                        onePrice: '1400 руб.',
                        twoPrice: '5000 руб.',
                        data: teachers[1]
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
                        img: women1,
                        teachName: 'Анастасия Болотова',
                        onePrice: '1250 руб.',
                        twoPrice: '4500 руб.',
                        data: teachers[1]
                    },
                    {
                        img: women1,
                        teachName: 'Анастасия Болотова',
                        onePrice: '1000 руб.',
                        twoPrice: '3600 руб.',
                        data: teachers[1]
                    },
                ]
            },
            {
                typeLess: 'Парные занятия',
                quant: 'Абонемент (4 занятия)',
                less:[
                    {
                        img: women2,
                        teachName: 'Мария Кричевская',
                        onePrice: '1500 руб.',
                        twoPrice: '5600 руб.',
                        data: teachers[0]
                    },
                    {
                        img: women1,
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
                        img: women2,
                        teachName: 'Мария Кричевская',
                        onePrice: '2200 руб.',
                        twoPrice: '7900 руб.',
                        data: teachers[0]
                    },
                    {
                        img: women1,
                        teachName: 'Анастасия Болотова',
                        onePrice: '1400 руб.',
                        twoPrice: '4900 руб.',
                        data: teachers[1]
                    },
                ]
            },
        ]
    },
    {
        nameLess: 'Подготовка к CILS',
        type:[
            {
                typeLess: 'Курс CILS B1(B2) — 12 занятий',
                quant: 'Абонемент (12 занятий)',
                less:[
                    {
                        img: women1,
                        teachName: 'Анастасия Болотова',
                        onePrice: '24000 руб.',
                        twoPrice: '30000 руб.',
                        data: teachers[1]
                    }
                ]
            },
            // {
            //     typeLess: 'Групповые занятия(офлайн)',
            //     quant: 'Абонемент (4 занятия)',
            //     less:[
            //         {
            //             img: women3,
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
    //                     img: women3,
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
    //                     img: women3,
    //                     teachName: 'Анастасия Болотова',
    //                     onePrice: '800 руб.',
    //                     twoPrice: '3000 руб. '
    //                 }
    //             ]
    //         },
    //     ]
    // },
]
export const price_franch = [
    
    {
        nameLess: 'Занятия для детей',
        type:[
            {
                typeLess: 'Групповые занятия',
                quant: 'Абонемент (4 занятия)',
                less:[
                    {
                        img: women2,
                        teachName: 'Мария Кричевская',
                        onePrice: '1250 руб.',
                        twoPrice: '4500 руб.',
                        data: teachers[0]
                    },
                    {
                        img: women3,
                        teachName: 'Ксения Лагутина',
                        onePrice: '1000 руб.',
                        twoPrice: '3600 руб.',
                        data: teachers[1]
                    },
                ]
            },
            {
                typeLess: 'Парные занятия',
                quant: 'Абонемент (4 занятия)',
                less:[
                    {
                        img: women2,
                        teachName: 'Мария Кричевская',
                        onePrice: '1500 руб.',
                        twoPrice: '5600 руб.',
                        data: teachers[0]
                    },
                    {
                        img: women3,
                        teachName: 'Ксения Лагутина',
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
                        img: women2,
                        teachName: 'Мария Кричевская',
                        onePrice: '2200 руб.',
                        twoPrice: '8000 руб.',
                        data: teachers[0]
                    },
                    {
                        img: women3,
                        teachName: 'Ксения Лагутина',
                        onePrice: '1400 руб.',
                        twoPrice: '5000 руб.',
                        data: teachers[1]
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
                        img: women1,
                        teachName: 'Анастасия Болотова',
                        onePrice: '1250 руб.',
                        twoPrice: '4500 руб.',
                        data: teachers[1]
                    },
                    {
                        img: women3,
                        teachName: 'Ксения Лагутина',
                        onePrice: '1000 руб.',
                        twoPrice: '3600 руб.',
                        data: teachers[1]
                    },
                ]
            },
            {
                typeLess: 'Парные занятия',
                quant: 'Абонемент (4 занятия)',
                less:[
                    {
                        img: women2,
                        teachName: 'Мария Кричевская',
                        onePrice: '1500 руб.',
                        twoPrice: '5600 руб.',
                        data: teachers[0]
                    },
                    {
                        img: women3,
                        teachName: 'Ксения Лагутина',
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
                        img: women2,
                        teachName: 'Мария Кричевская',
                        onePrice: '2200 руб.',
                        twoPrice: '7900 руб.',
                        data: teachers[0]
                    },
                    {
                        img: women3,
                        teachName: 'Ксения Лагутина',
                        onePrice: '1400 руб.',
                        twoPrice: '4900 руб.',
                        data: teachers[1]
                    },
                ]
            },
        ]
    },
]

