import React from 'react';
import { ActionTypes } from "../actions/actions.js";


export const Reducer = (initialState, action) => {
  
const initialState = {
  startTimer: null,
  pausedTimer: false,
  isTimer: true,
};
    switch (action.type) {
      case ActionTypes.IS_TIMER:
        return {};
      case ActionTypes.START_TIMER:
        return {};
      case ActionTypes.STOP_TIMER:
        return {};
      case ActionTypes.PAUSE_TIMER:
        return {};
      default:
        throw new Error();
    }
  }