export const ActionTypes = {
    START_TIMER: "START_TIMER",
    STOP_TIMER: "STOP_TIMER",
    IS_TIMER: "IS_TIMER",
    PAUSE_TIMER: "PAUSE_TIMER"
  };
  
  export const isTimer = () => ({
    type: ActionTypes.IS_TIMER,
  });
  
  export const startTimer = timerSetup => ({
    type: ActionTypes.START_TIMER,
    timerSetup
  });
  
  export const stopTimer = () => ({
    type: ActionTypes.STOP_TIMER
  });
  
  export const pauseTimer = () => ({
    type: ActionTypes.PAUSE_TIMER
  });


  