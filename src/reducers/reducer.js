import React from 'react';

const initialState = {
    startTimer: null,
    pausedTimer: false,
    isTimer: true,
  };

function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {};
      case 'decrement':
        return {};
      default:
        throw new Error();
    }
  }

export default reducer;