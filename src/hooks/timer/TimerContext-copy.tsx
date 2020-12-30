/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';

type Action = {
  type: 'decrement' | 'incrementMinute' | 'decrementMinute';
};
// eslint-disable-next-line no-unused-vars
type Dispatch = (action: Action) => void;
type State = { seconds: number };
type TimerProviderProps = { children: React.ReactNode };

const TimerStateContext = React.createContext<State | undefined>(undefined);
const TimerDispatchContext = React.createContext<Dispatch | undefined>(
  undefined,
);

function timerReducer(state: State, action: Action) {
  switch (action.type) {
    case 'decrement': {
      return { seconds: state.seconds - 1 };
    }
    case 'incrementMinute': {
      return { seconds: state.seconds + 60 };
    }
    case 'decrementMinute': {
      return { seconds: state.seconds - 60 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function TimerProvider({ children }: TimerProviderProps) {
  const [state, dispatch] = React.useReducer(timerReducer, {
    seconds: 5,
  });

  return (
    <TimerStateContext.Provider value={state}>
      <TimerDispatchContext.Provider value={dispatch}>
        {children}
      </TimerDispatchContext.Provider>
    </TimerStateContext.Provider>
  );
}

function useTimerState() {
  const context = React.useContext(TimerStateContext);
  if (context === undefined) {
    throw new Error('useTimerState must be used within a TimerProvider');
  }
  return context;
}

function useTimerDispatch() {
  const context = React.useContext(TimerDispatchContext);
  if (context === undefined) {
    throw new Error('useTimerDispatch must be used within a TimerProvider');
  }
  return context;
}
export { TimerProvider, useTimerState, useTimerDispatch };
