import classChildren from '../../../source/images/main/classChildren.png'
import dorinclass from '../../../source/images/main/dorinclass.png'
import classes from '../../../source/images/main/class.png'
import womenClass from '../../../source/images/main/womenClass.png'
import  komnata1 from '../../../source/images/main/komnata1.png'
import komnata2 from '../../../source/images/main/komnata2.png'
import man1 from '../../../source/images/main/man1.jpg'
import women1 from '../../../source/images/main/women1.jpg'
import women2 from '../../../source/images/main/women2.jpg'
import women3 from '../../../source/images/main/women3.jpg'

export const course = [
    {
        id: 1,
        categories: ['eng', 'franch', 'italy'],
        title: 'Занятия в группе',
        text: 'Максимальный размер группы 6 человек',
        tag: 'для детей и взрослых',
        image: true,
        class: 'group'
    },
    {
        id: 2,
        categories: ['eng', 'franch', 'italy'],
        title: 'Для путешествий',
        text: 'Можно заниматься в паре или в группе до 4 человек',
        tag: 'ПУТЕШЕСТВИЯ',
        image: false,
        class: 'put'
    },
    {
        id: 3,
        categories: ['eng', 'franch', 'italy'],
        title: 'ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ',
        text: 'В MaryPro School вы можете заниматься индивидуально с преподавателем. Это отличная возможность достигнуть своих целей в кратчайшие сроки',
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
        text: 'В нашем центре вы можете пройти подготовку к экзаменам по итальянскому языку CILS и PLIDA ',
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
export const schoolImage_two = [
    {
        id: 1,
        src: komnata1,
    },
    {
        id: 2,
        src: dorinclass,
    },
    {
        id: 3,
        src: komnata2,
    },
    {
        id: 4,
        src: womenClass,
    },
]

export const teachers = {
    one:{
        src: women2,
        name: 'Мария Павловна Кричевская',
        description: 'Основатель центра. Преподаватель английского, итальянcкого и французского языков'
    },
    two:{
        src: women3,
        name: 'Ксения Александровна Лагутина',
        description: `Преподаватель английского и французского языка`
    },
    three:{
        src: women1,
        name: 'Анастасия Юрьевна Болотова',
        description: `Преподаватель английского и французского языка`
    },
    four:{
        src: man1,
        name: 'Павел Зиновьевич Кричевский',
        description: 'Преподаватель английского языка'
    },

}