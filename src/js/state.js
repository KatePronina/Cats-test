const INITIAL_STATE = {
    lives: 3,
    level: 0,
    time: 30,
    answers: [],
    userName: ''
};

const QUESTIONS = [
    {
        options: [
            {
                name: 'Бирманская',
                value: 'birman'
            },
            {
                name: 'Бенгальская',
                value: 'bengal'
            },
            {
                name: 'Балинезийская',
                value: 'balinez'
            }
        ],
        right: 'birman',
        image: 'task1'
    },
    {
        options: [
            {
                name: 'Британская',
                value: 'british'
            },
            {
                name: 'Бомбейская',
                value: 'bomley'
            },
            {
                name: 'Гималайская',
                value: 'gimalay'
            }
        ],
        right: 'gimalay',
        image: 'task2'
    },
    {
        options: [
            {
                name: 'Европейская',
                value: 'european'
            },
            {
                name: 'Девон-рекс',
                value: 'reks'
            },
            {
                name: 'Бурмилла',
                value: 'burmil'
            }
        ],
        right: 'reks',
        image: 'task3'
    },
    {
        answers: ['bobtail', 'cornish', 'egyptian'],
        options: [
            {
                name: 'Курильский бобтейл',
                value: 'bobtail'
            },
            {
                name: 'Корниш-рекс',
                value: 'cornish'
            },
            {
                name: 'Египетская мау',
                value: 'egyptian'
            }
        ],
        right: 'bobtail',
        image: 'task4'
    },
    {
        options: [
            {
                name: 'Оцикет',
                value: 'ocicat'
            },
            {
                name: 'Манчкин',
                value: 'munchkin'
            },
            {
                name: 'Египетская мау',
                value: 'egyptian'
            }
        ],
        right: 'ocicat',
        image: 'task5'
    },
    {
        options: [
            {
                name: 'Британская',
                value: 'british'
            },
            {
                name: 'Манчкин',
                value: 'munchkin'
            },
            {
                name: 'Сомали',
                value: 'somali'
            }
        ],
        right: 'somali',
        image: 'task6'
    },
    {
        options: [
            {
                name: 'Шантильи Тиффани',
                value: 'tiffany'
            },
            {
                name: 'Сфинкс',
                value: 'sphinx'
            },
            {
                name: 'Корниш-рекс',
                value: 'cornish'
            }
        ],
        right: 'tiffany',
        image: 'task7'
    },
    {
        options: [
            {
                name: 'Персидская',
                value: 'pers'
            },
            {
                name: 'Сфинкс',
                value: 'sphinx'
            },
            {
                name: 'Норвежская лесная',
                value: 'norway'
            }
        ],
        right: 'pers',
        image: 'task8'
    },
    {
        options: [
            {
                name: 'Сингапурская',
                value: 'singapore'
            },
            {
                name: 'Русская голубая',
                value: 'russian'
            },
            {
                name: 'Сибирская',
                value: 'sibir'
            }
        ],
        right: 'singapore',
        image: 'task9'
    },
    {
        options: [
            {
                name: 'Шотландская длинношерстная',
                value: 'scottish'
            },
            {
                name: 'Тайская',
                value: 'thai'
            },
            {
                name: 'Сибирская',
                value: 'sibir'
            }
        ],
        right: 'scottish',
        image: 'task10'
    }
]
  
const ANSWER_POINTS = 10;
const LIVE_POINTS = 5;

export {INITIAL_STATE, QUESTIONS, ANSWER_POINTS, LIVE_POINTS}