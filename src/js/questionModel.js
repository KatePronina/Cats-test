import {QUESTIONS, INITIAL_STATE, ANSWER_POINTS, LIVE_POINTS} from './state.js';

export default class QuestionModel {
    constructor(playerName) {
        this.userName = playerName;
        this.restart();
    }

    get state() {
        return Object.assign({}, this._state);
    }

    set name(name) {
        this._state.userName = name;
    }

    checkAnswer(answer) {
        if (answer === QUESTIONS[this._state.level].right) {   
            this._state.answers.push(true);  
        } else {
            this._state.answers.push(false);
            this._state.lives -= 1;
        }
    }

    updateLevel() {
        this._state.level += 1;
        if (this._state.level === QUESTIONS.length || this._state.lives === 0) {
            this.onUpdateFinal();
        } else {
            this.onUpdateLevel();
        }
    }

    restart() {
        this._state = Object.assign({}, INITIAL_STATE, {answers: []});
        this.onRestart();
    }

    get countResult() { 
        let result = this._state.lives * LIVE_POINTS;
    
        this._state.answers.forEach((answer) => {
            if (answer) {
                result += ANSWER_POINTS;
            }
        });
    
        return result;
    }

    get countAnswers() {
        let result = 0;
    
        this._state.answers.forEach((answer) => {
            if (answer) {
                result++;
            }
        });
    
        return result;
    }

    onRestart() {

    }

    onUpdateFinal() {

    }

    onUpdateLevel() {

    }
}