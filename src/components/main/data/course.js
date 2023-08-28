import classChildren from '../../../source/images/main/classChildren.jpg'
import dorinclass from '../../../source/images/main/dorinclass.jpg'
import classes from '../../../source/images/main/class.jpg'
import womenClass from '../../../source/images/main/womenClass.jpg'
import man1 from '../../../source/images/main/man1.jpg'
import women1 from '../../../source/images/main/women1.jpg'
import women2 from '../../../source/images/main/women2.jpg'
import women3 from '../../../source/images/main/women3.jpg'

export const course = [
    {
        id: 1,
        categories: ['eng', 'franch', 'italy'],
        title: 'Занятия в группе',
        text: 'Занятия проводятся в группах от 6 человек',
        tag: 'для детей и взрослых',
        image: false,
        class: ''
    },
    {
        id: 2,
        categories: ['eng', 'franch', 'italy'],
        title: 'Для путешествий',
        text: 'Занятия проводятся в группах от 6 человек',
        tag: 'ПУТЕШЕСТВИЯ',
        image: false,
        class: ''
    },
    {
        id: 3,
        categories: ['eng', 'franch', 'italy'],
        title: 'ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ',
        text: 'В нашей школе вы можете заниматься индивидуально с преподавателем. Он поможет раскрыться вашим талантам и достигнуть новых высот в покорении иностранного языка',
        tag: 'для детей и взрослых',
        image: false,
        class: 'indiv'
    },
    {
        id: 4,
        categories: ['eng', 'franch'],
        title: 'speaking club',
        text: 'Занятия проводятся в группах от 6 человек',
        tag: 'прокачать разговорный',
        image: false,
        class: 'speak'
    },
    {
        id: 5,
        categories: ['eng'],
        title: 'Подготовка к экзаменам',
        text: 'В нашем центре вы можете пройти подготовку к ОГЭ, ЕГЭ, PET, FCE, TOEFL, IELTS ',
        tag: 'экзамены',
        image: true,
        class: 'ege'
    },
    {
        id: 6,
        categories: ['italy'],
        title: 'Подготовка к CILS',
        text: 'В нашем центре вы можете пройти подготовку к ОГЭ, ЕГЭ, PET, FCE, TOEFL, IELTS   ',
        tag: 'экзамены', 
        image: true,
        class: 'cils'
    },
]
export const schoolImage = [
    {
        id: 1,
        src: classChildren,
    },
    {
        id: 2,
        src: dorinclass,
    },
    {
        id: 3,
        src: classes,
    },
    {
        id: 4,
        src: womenClass,
    },
]

export const teachers = {
    one:{
        src: women2,
        name: 'Мария Кричевская',
        description: 'Преподаватель трех языков'
    },
    two:{
        src: women3,
        name: 'Ксения Лагутина',
        description: `Преподаватель английского и французского языка`
    },
    three:{
        src: women1,
        name: 'Анастасия Болотова',
        description: `Преподаватель английского и французского языка`
    },
    four:{
        src: man1,
        name: 'Павел Кричевский',
        description: 'Преподаватель английского языка'
    },

}