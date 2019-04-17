import View from './view.js';

export default class startView extends View {
    constructor() {
        super();
    }

    getElement() {
        if (this._element) {
            this.appendElement(this._element);
        }
        this._element = document.createElement('section');
        this._element.classList.add('section', 'screen');
        this._element.innerHTML = this.render();
        this.bind(this._element);
        this.appendElement(this._element);
    }

    render() {
        return `
        <h1 class="section__title">Мяу-тест: Угадаете породы кошек по фото?</h1>
        <p class="section__description">
            Любить кошек все умеют, а вот знать, какая порода как выглядит, - не особо! Но, может, это не про вас? Сможете набрать 10/10 в этом тесте на знание пород кошек?
        </p>
        <section class="rules section__rules">
            <h2 class="rules__title">Правила</h2>
            <ul class="rules__description">
                <li class="rules__item">Угадай 10 раз породу для каждого изображения кота</li>
                <li class="rules__item">Длительность каждой попытки 30 секунд</li>
                <li class="rules__item">Более 3х раз ошибиться нельзя</li>
            </ul>
        </section>
        <form action="#" class="section__form">
            <input class="section__form-input" type="text" placeholder="Введите Ваше имя" required>
            <button class="section__form-btn" type="submit">Поехали!</button>
        </form>`;
    }

    bind(element) {
        const confirmForm = element.querySelector('.section__form');
        const input = element.querySelector('.section__form-input');

        confirmForm.addEventListener('submit', () => {
            this.onSubmit(input);
        })
    }

    onSubmit() {
        
    }
}