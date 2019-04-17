import View from './view';

export default class HeaderView extends View {
    constructor(state) {
        super();
        this.state = state;
    }

    getElement() {
        if (this._element) {
            this.appendElement(this._element);
        }
        this._element = document.createElement('header');
        this._element.classList.add('header', 'question__header');
        this._element.innerHTML = this.render();
        this.appendElement(this._element);
        this.bind(this._element);
    }

    render() {
        return `
        <button class="back header__back" type="button">Вернуться к началу</button>
        <span class="timer header__timer">30</span>
        <p class="lives header__lives">Осталось жизней: <span class="lives__number">${this.state.lives}</span></p>`;
    }

    bind(element) {
        const backBtn = element.querySelector('.back');
        backBtn.addEventListener('click', () => {
            this.onBack();
        })
    }

    updateTime(time) {
        const timer = this._element.querySelector('.header__timer');
        timer.textContent = time + '';
    }

    onBack() {

    }
}