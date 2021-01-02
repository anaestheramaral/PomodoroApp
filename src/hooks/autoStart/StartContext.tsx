/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';

type Action = {
  type: 'toggleStart';
};
// eslint-disable-next-line no-unused-vars
type Dispatch = (action: Action) => void;
type State = { autoStart: boolean };
type StartProviderProps = { children: React.ReactNode };

const StartStateContext = React.createContext<State | undefined>(undefined);
const StartDispatchContext = React.createContext<Dispatch | undefined>(
  undefined,
);

function startReducer(state: State, action: Action) {
  switch (action.type) {
    case 'toggleStart': {
      return { autoStart: !state.autoStart };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function StartProvider({ children }: StartProviderProps) {
  const [state, dispatch] = React.useReducer(startReducer, {
    autoStart: false,
  });

  return (
    <StartStateContext.Provider value={state}>
      <StartDispatchContext.Provider value={dispatch}>
        {children}
      </StartDispatchContext.Provider>
    </StartStateContext.Provider>
  );
}

function useStartState() {
  const context = React.useContext(StartStateContext);
  if (context === undefined) {
    throw new Error('useTimerState must be used within a StartProvider');
  }
  return context;
}

function useStartDispatch() {
  const context = React.useContext(StartDispatchContext);
  if (context === undefined) {
    throw new Error('useStartDispatch must be used within a StartProvider');
  }
  return context;
}
export { StartProvider, useStartState, useStartDispatch };
