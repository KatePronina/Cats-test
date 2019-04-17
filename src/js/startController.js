import startView from './start.js';
import Router from './main.js';
import View from './view.js';

export default class startController {
    constructor() {
        this.start = new startView();
        View.clearContainer();
        this.start.getElement();
        this.start.onSubmit = (input) => {
            Router.showQuestion(input.value);
        }
    }  
}