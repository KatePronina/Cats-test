/* eslint-disable no-undef */
import View from './view.js';
import HeaderView from './renderHeader.js';
import QuestionView from './renderQuestion.js';
import {QUESTIONS} from './state.js';
import Router from './main.js';


export default class GameController {
    constructor(model) {
        this.model = model;
        this.header = new HeaderView(this.model.state);
        this.question = new QuestionView(this.model.state, QUESTIONS);

        this.model.name = this.model.userName;

        this.time = this.model._state.time;
        this.timer;

        View.clearContainer();
        this.header.getElement();
        this.question.getElement();
        this.startTimer();

        this.header.onBack = () => {
            this.model.restart();
            this.stopTimer();
        }

        this.model.onRestart = () => {
            View.clearContainer();
            Router.showStart();
        }

        this.question.onAnswer = (answer) => {
            this.stopTimer();
            this.model.checkAnswer(answer);
            this.model.updateLevel();
        }

        this.model.onUpdateLevel = () => {
            this.header = new HeaderView(this.model.state);
            this.question = new QuestionView(this.model.state, QUESTIONS);
            View.clearContainer();
            this.header.getElement();
            this.question.getElement();
            this.startTimer();

            this.question.onAnswer = (answer) => {
                this.stopTimer();
                this.model.checkAnswer(answer);
                this.model.updateLevel();
            }

            this.header.onBack = () => {
                this.model.restart();
                this.stopTimer();
            }
        }

        this.model.onUpdateFinal = () => {
            View.clearContainer();
            Router.showFinal(this.model);
        }
    }

    stopTimer() {
        clearTimeout(this.timer);
        this.time = this.model._state.time;
    }

    tick() {
        this.time--;
        this.header.updateTime(this.time);
    }

    startTimer() {
        this.timer = setTimeout(() => {
            if (this.time === 0) {
                this.question.onAnswer(false);
            } else {
                this.tick();
                this.startTimer();
            } 
        }, 1000)
    }
}