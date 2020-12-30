import React, { createContext, useState } from 'react';
// import usePersistedState from '../usePersistedState';

type TimerProviderProps = { children: React.ReactNode };

type TimerContextProps = {
  session: number;
  break: number;
  longBreak: number;
  time: TimeProps;
  label: string;
  isActive: boolean;
};

type TimerContextState = {
  seconds: TimerContextProps;
  setSeconds: React.Dispatch<React.SetStateAction<TimerContextProps>>;
};

type TimeProps = {
  startingTime: number;
  currentTime: number;
};

const defaultTimer: TimerContextProps = {
  session: 25,
  break: 5,
  longBreak: 20,
  time: { currentTime: 25, startingTime: 25 },
  label: 'Focus',
  isActive: false,
};

const defautTimerState: TimerContextState = {
  seconds: defaultTimer,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSeconds: (): void => {},
};
export const TimerContext = createContext<TimerContextState>(defautTimerState);

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const [seconds, setSeconds] = useState<TimerContextProps>(defaultTimer);

  return (
    <TimerContext.Provider value={{ seconds, setSeconds }}>
      {children}
    </TimerContext.Provider>
  );
};
