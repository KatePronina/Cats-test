export default class View {
    constructor() {
        if (new.target === View) {
            throw new Error('');
        }
    }

    appendElement(elem) {
        const container = document.querySelector('.wrapper');
        container.appendChild(elem);
    }

    static clearContainer() {
        const container = document.querySelector('.wrapper');
        container.innerHTML = '';
    }
}