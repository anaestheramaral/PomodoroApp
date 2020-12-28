import { useContext } from 'react';
import { TimerContext } from './TimerContext.jsx';

export const IncrementTimer = () => {
  const [minutes, setMinutes] = useContext(TimerContext);
  setMinutes(m => m + 1);

  return minutes;
};

export const DecrementTimer = () => {
  const [minutes, setMinutes] = useContext(TimerContext);
  setMinutes(m => m - 1);

  return minutes;
};
