import View from './view';

export default class QuestionView extends View {
    constructor (state, questions) {
        super();
        this.state = state;
        this.questions = questions;
    }

    getElement() {
        if (this._element) {
            this.appendElement(this._element);
        }
        this._element = document.createElement('section');
        this._element.classList.add('task');
        this._element.innerHTML = this.render();
        this.appendElement(this._element);
        this.bind(this._element);
    }

    render() {
        return `
        <p class="task__title">Какая это порода?</p>
        <div class="task__image">
            <picture>
            <source srcset="img/webp/${this.questions[this.state.level].image}.webp" type="image/webp">
            <img src="img/${this.questions[this.state.level].image}.jpg" alt="Какая это порода?" class="task__img">
            </picture>
        </div>
        <form action="#" class="task__answers">
            <input id="${this.questions[this.state.level].options[0].value}" type="radio" name="task1" value="${this.questions[this.state.level].options[0].value}" class="task__input">
            <label for="${this.questions[this.state.level].options[0].value}" class="task__answer">${this.questions[this.state.level].options[0].name}</label>

            <input id="${this.questions[this.state.level].options[1].value}" type="radio" name="task1" value="${this.questions[this.state.level].options[1].value}" class="task__input">
            <label for="${this.questions[this.state.level].options[1].value}" class="task__answer">${this.questions[this.state.level].options[1].name}</label>

            <input id="${this.questions[this.state.level].options[2].value}" type="radio" name="task1" value="${this.questions[this.state.level].options[2].value}" class="task__input">
            <label for="${this.questions[this.state.level].options[2].value}" class="task__answer">${this.questions[this.state.level].options[2].name}</label>
        </form>`;
    }

    bind(element) {
        const inputs = element.querySelectorAll('.task__input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('change', (e) => {
                this.onAnswer(e.target.value);  
            })
        }
    }

    // eslint-disable-next-line no-unused-vars
    onAnswer(answer) {

    }

    onBack() {

    }
}