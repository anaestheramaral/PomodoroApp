/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';

type Action = { type: 'increment' | 'decrement' | 'play' };
// eslint-disable-next-line no-unused-vars
type Dispatch = (action: Action) => void;
type State = { seconds: number };
type TimerProviderProps = { children: React.ReactNode };
// import usePersistedState from '../usePersistedState';

// interface TimerContextData {
//   seconds: number;
// }

// export const TimerContext = createContext<TimerContextData>(
//   {} as TimerContextData,
// );

// export const TimerProvider: React.FC = ({ children }) => {
//   const [minutes, setMinutes] = usePersistedState('timer', 25 * 60);

//   return (
//     <TimerContext.Provider value={{ minutes }}>
//       {children}
//     </TimerContext.Provider>
//   );
// };

const TimerStateContext = React.createContext<State | undefined>(undefined);
const TimerDispatchContext = React.createContext<Dispatch | undefined>(
  undefined,
);

function timerReducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment': {
      return { seconds: state.seconds };
    }
    case 'decrement': {
      return { seconds: state.seconds };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function TimerProvider({ children }: TimerProviderProps) {
  const [state, dispatch] = React.useReducer(timerReducer, {
    seconds: 25 * 60,
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
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
}

function useTimerDispatch() {
  const context = React.useContext(TimerDispatchContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider');
  }
  return context;
}
export { TimerProvider, useTimerState, useTimerDispatch };
