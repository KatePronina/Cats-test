/* eslint-disable no-unused-vars */
import startController from './startController.js';
import GameController from './question.js';
import finalController from './finalController.js';
import QuestionModel from './questionModel.js';

export default class Router {
    static showStart() {
        const start = new startController();
    }

    static showQuestion(userName) {
        const questModel = new QuestionModel(userName);
        const question = new GameController(questModel);
    }

    static showFinal(model) {
        const finController = new finalController(model);
    }
}

Router.showStart();