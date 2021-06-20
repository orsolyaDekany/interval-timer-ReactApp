import React from 'react';

const initialValue = {
    startTimer: null,
    pausedTimer: false,
    isTimer: true,
  };

function IntervalTimer(startTimer,pausedTimer,isTimer) {

    return (
        <div>
            <form>
            <div>
                <label>Interval timer 1</label>
                <input type="text" />

            </div>
            <div>
                <label>Interval timer 2</label>
                <input type="text" />
            </div>
            </form>
            <button>

            </button>
        </div>
    );
}

export default IntervalTimer;