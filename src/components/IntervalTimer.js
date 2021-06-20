import React from 'react';
import { Ref } from 'react';

function IntervalTimer(startTimer,pausedTimer,isTimer) {

    const reducer = () => {

    }

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
            <button>

            </button>
        </div>
    );
}

export default IntervalTimer;