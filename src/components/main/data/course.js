import classChildren from '../../../source/images/main/classChildren.png'
import dorinclass from '../../../source/images/main/dorinclass.png'
import classes from '../../../source/images/main/class.png'
import womenClass from '../../../source/images/main/womenClass.png'
import  komnata1 from '../../../source/images/main/komnata1.png'
import komnata2 from '../../../source/images/main/komnata2.png'
import img1 from '../../../source/images/main/DSC_031.jpg'
import img2 from '../../../source/images/main/DSC_032.jpg'
import img3 from '../../../source/images/main/DSC_033.jpg'
import img4 from '../../../source/images/main/DSC_034.jpg'
import img5 from '../../../source/images/main/DSC_035.jpg'
import img6 from '../../../source/images/main/DSC_036.jpg'
import img7 from '../../../source/images/main/DSC_037.jpg'
import img8 from '../../../source/images/main/IMG_3059.jpeg'
import img9 from '../../../source/images/main/IMG_3060.jpeg'
import img10 from '../../../source/images/main/IMG_3061.jpeg'
import img11 from '../../../source/images/main/3.png'

import man1 from '../../../source/images/main/man1.jpg'
import women1 from '../../../source/images/main/women4.jpg'
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
        id: 3,
        src: classes,
    },
    {
        id: 5,
        src: img8,
    },
    {
        id: 6,
        src: img9,
    },
    {
        id: 7,
        src: img10,
    },
    {
        id: 8,
        src: img11,
    },
]
export const schoolImage_two = [
    {
        id: 1,
        src: komnata1,
    },
    {
        id: 3,
        src: komnata2,
    },
    {
        id: 5,
        src: img1,
    },
    {
        id: 6,
        src: img2,
    },
    {
        id: 7,
        src: img3,
    },
    {
        id: 8,
        src: img4,
    },
    {
        id: 9,
        src: img5,
    },
    {
        id: 10,
        src: img6,
    },
    {
        id: 11,
        src: img7,
    },
    
]

export const teachers = {
    one:{
        src: women3,
        name: 'Ксения Александровна Лагутина',
        description: `Преподаватель английского и французского языка`
    },
    two:{
        src: man1,
        name: 'Павел Зиновьевич Кричевский',
        description: 'Преподаватель английского языка'
    },
    three:{
        src: women1,
        name: 'Иванова Джамиля Аслановна',
        description: `Преподаватель Английского языка для детей дошкольного и младшего школьного возраста`
    },

}