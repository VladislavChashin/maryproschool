import {teachers} from './teachers.js'
import women1 from '../../../source/images/main/women1о.png'
import women2 from '../../../source/images/main/oval.png'
import women3 from '../../../source/images/main/women3o.png'
import women4 from '../../../source/images/main/women4o.png'
import women5 from '../../../source/images/main/man1.jpg'
import popnewwomen from '../../../source/images/main/popnewwomen.png'

export const indiv_price = [
    
    {
        type:[
            {
                typeLess: 'Вид занятия',
                quant: 'Групповое',
                less:[
                    {
                        img: women5,
                        teachName: 'Павел Кричевский',
                        onePrice: '3500 руб.',
                        twoPrice: '1000 руб/ч',
                        data: teachers[1]
                    },
                    {
                        img: women3,
                        teachName: 'Ксения Лагутина',
                        onePrice: '3500 руб.',
                        twoPrice: '1000 руб/ч',
                        data: teachers[0]
                    },
                    {
                        img:women4,
                        teachName: 'Джамилия Аслановна',
                        onePrice: '800 руб.',
                        twoPrice: '4800 руб.',
                        data: teachers[2]
                    },
                ]
            },
        ]
    },
]
export const price_home = [
    {
        addres: 'home',
        price: 6400,
        teachers:{
            eng: [teachers[0], teachers[1], teachers[4]],
            franch: [teachers[0], teachers[1]],
            italy: [teachers[0]],
        },
        indiv_price: [
            {
                type:[
                    {
                        typeLess: 'Вид занятия',
                        quant: 'Групповое',
                        less:[
                            {
                                img: women3,
                                teachName: 'Ксения Лагутина',
                                onePrice: '1400 руб/чac',
                                twoPrice: '________',
                                data: teachers[0]
                            },
                            {
                                img: popnewwomen,
                                teachName: 'Караваева Татьяна',
                                onePrice: '1700 руб/чac',
                                twoPrice: '________',
                                data: teachers[4]
                            },
                        ]
                    },
                ]
            },
        ]
    }
]

export const price_guber = [
    // {
    //     lang: 'eng',
    //     type:[
            {
                addres: 'guber',
                price: 5600,
                teachers:{
                    eng: [teachers[0], teachers[1], teachers[4]],
                    franch: [teachers[0], teachers[1]],
                    italy: [teachers[0]],
                },
                indiv_price: [
                    {
                        type:[
                            {
                                typeLess: 'Вид занятия',
                                quant: 'Групповое',
                                less:[
                                    {
                                        img: women5,
                                        teachName: 'Павел Кричевский',
                                        onePrice: '1000 руб/час',
                                        twoPrice: '3500 руб.',
                                        data: teachers[1]
                                    },
                                    {
                                        img:women4,
                                        teachName: 'Джамилия Аслановна',
                                        onePrice: '1400 руб/час',
                                        twoPrice: '________',
                                        data: teachers[2]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            
    //     ]
    // }
]

