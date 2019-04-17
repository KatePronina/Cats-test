import View from './view.js';

class finalView extends View {
    constructor(state, result, rightAnswers) {
        super();
        this.state = state;
        this.result = result;
        this.rightAnswers = rightAnswers;
    }

    getElement() {
        if (this._element) {
            this.appendElement(this._element);
        }
        this._element = document.createElement('section');
        this._element.classList.add('final', 'screen');
        this._element.innerHTML = this.render();
        this.bind(this._element);
        this.appendElement(this._element);
    }

    render() {
        return `
        <header class="header final__header">
            <button class="back header__back" type="button">Вернуться к началу</button>
        </header>
        <section class="result final__resulr">
        <h2 class="result__title">Тест пройден!</h2>
        <p>${this.state.userName}, Вы набрали ${this.result} баллов и ${this.rightAnswers} правильных ответов!</p>
        <p>${this.rightAnswers > 5 ? 'Поздравляем!' : 'В следующий раз будет лучше'}</p>
        </section>`;
    }

    bind(element) {
        const backBtn = element.querySelector('.back');
        backBtn.addEventListener('click', () => {
            this.onClick();
        })
    }

    onClick() {
        
    }
}

export default finalView;