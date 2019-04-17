import finalView from './final.js';
import View from './view.js';
import Router from './main.js';

export default class finalController {
    constructor(model) {
        this.model = model;
        this.final = new finalView(this.model.state, this.model.countResult, this.model.countAnswers);
        this.final.getElement();
        this.final.onClick = () => {
            this.model.restart();
        }
        this.model.onRestart = () => {
            View.clearContainer();
            Router.showStart();
        }
    }
}