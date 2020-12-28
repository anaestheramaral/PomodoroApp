import React, { useState, useContext } from 'react';
// import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from 'polished';
import { Container, ControllersWrapper, Wrapper } from './style';
import useToggleTheme from '../../hooks/theme/useToggleTheme';
import {
  useTimerState,
  useTimerDispatch,
} from '../../hooks/timer/TimerContext-copy';

const Configs: React.FC = () => {
  // const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(20);

  const [checkedAutoPlay, setCheckedAutoPlay] = useState(false);
  // const [checkedDark, setCheckedDark] = useState(false);

  // function TimerDisplay() {
  //   const { seconds } = useTimerState();
  //   return seconds;
  // }

  // function Increase() {
  //   const dispach = useTimerDispatch();
  //   return (
  //     <button type="button" onClick={() => dispach({ type: 'increment' })}>
  //       plus
  //     </button>
  //   );
  // }

  const { toggleTheme } = useToggleTheme();
  const dispach = useTimerDispatch();
  const { seconds } = useTimerState();

  const theme = useContext(ThemeContext);
  return (
    <Container>
      <h1>Settings</h1>
      <ControllersWrapper>
        <div>
          <h2>Focus Time</h2>
          {/* <span>{pomodoro}</span> */}
          <span>{seconds / 60}</span>
          <div>
            {/* <button type="button" onClick={() => setPomodoro(p => p + 1)}> */}
            <button
              type="button"
              onClick={() => dispach({ type: 'incrementMinute' })}
            >
              +
            </button>
            {/* <button type="button" onClick={() => setPomodoro(p => p - 1)}>
              -
            </button> */}
          </div>
        </div>

        <div>
          <h2>Short Break</h2>
          <span>{shortBreak}</span>
          <div>
            <button type="button" onClick={() => setShortBreak(p => p + 1)}>
              +
            </button>
            <button type="button" onClick={() => setShortBreak(p => p - 1)}>
              -
            </button>
          </div>
        </div>

        <div>
          <h2>Long Break </h2>
          <span>{longBreak}</span>
          <div>
            <button type="button" onClick={() => setLongBreak(p => p + 1)}>
              +
            </button>
            <button type="button" onClick={() => setLongBreak(p => p - 1)}>
              -
            </button>
          </div>
        </div>
      </ControllersWrapper>
      <Wrapper>
        <strong>Auto start next round?</strong>
        <Switch
          id="auto"
          checked={checkedAutoPlay}
          onChange={() => setCheckedAutoPlay(!checkedAutoPlay)}
        />
      </Wrapper>
      <Wrapper>
        <strong>Dark mode</strong>
        <Switch
          id="dark"
          checked={theme.title !== 'light'}
          onChange={toggleTheme}
          offColor={shade(0.15, theme.colors.secondary)}
          onColor={theme.colors.primary}
        />
      </Wrapper>
    </Container>
  );
};

export default Configs;
