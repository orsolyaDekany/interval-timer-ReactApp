import React from 'react';
import { Ref, useReducer } from 'react';
import {Reducer} from '../reducers/reducer.js';
import {isTimer,startTimer,stopTimer,pausedTimer} from '../actions/actions.js';



function IntervalTimer(isTimer,startTimer,stopTimer,pausedTimer) {

    const [state, dispatch] = useReducer(Reducer, initialState);


    return (
        <div>
            <form>
            <div>
                <label>Interval timer 1</label>
                <input type="text" ref={(input) => (this.firstInput = input)}/>

            </div>
            <div>
                <label>Interval timer 2</label>
                <input type="text"  ref={(input) => (this.secondInput = input)}/>
            </div>
            </form>
            <button
            >

            </button>
        </div>
    );
}

export default IntervalTimer;