/* eslint-disable react/jsx-curly-newline */
import React, { useState, useContext } from 'react';
// import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from 'polished';
import { Container, ControllersWrapper, Wrapper } from './style';
import useToggleTheme from '../../hooks/theme/useToggleTheme';
// import {
//   useTimerState,
//   useTimerDispatch,
// } from '../../hooks/timer/TimerContext-copy';
import { TimerContext } from '../../hooks/timer/TimerContext';

const Configs: React.FC = () => {
  // const [pomodoro, setPomodoro] = useState(25);
  const theme = useContext(ThemeContext);
  const { seconds, setSeconds } = useContext(TimerContext);

  // const [shortBreak, setShortBreak] = useState(5);
  // const [longBreak, setLongBreak] = useState(20);

  const [checkedAutoPlay, setCheckedAutoPlay] = useState(false);

  const { toggleTheme } = useToggleTheme();
  // const dispach = useTimerDispatch();
  // const { seconds } = useTimerState();

  return (
    <Container>
      <h1>Settings</h1>
      <ControllersWrapper>
        <div>
          <h2>Focus Time</h2>
          {/* <span>{pomodoro}</span> */}
          <span>{seconds.session}</span>
          <div>
            {/* <button
              type="button"
              onClick={() => dispach({ type: 'incrementMinute' })}
            > */}
            <button
              type="button"
              onClick={() =>
                setSeconds({
                  ...seconds,
                  session: seconds.session + 1,
                  time: {
                    startingTime: seconds.session + 1,
                    currentTime: seconds.session + 1,
                  },
                })
              }
            >
              +
            </button>
            <button
              type="button"
              onClick={() =>
                setSeconds({
                  ...seconds,
                  session: seconds.session - 1,
                  time: {
                    startingTime: seconds.session - 1,
                    currentTime: seconds.session - 1,
                  },
                })
              }
            >
              -
            </button>
            {/* <button type="button" onClick={() => setPomodoro(p => p - 1)}>
              -
            </button> */}
          </div>
        </div>

        <div>
          <h2>Short Break</h2>
          <span>{seconds.break}</span>
          <div>
            <button
              type="button"
              onClick={() =>
                setSeconds({
                  ...seconds,
                  break: seconds.break + 1,
                  time: {
                    startingTime: seconds.break + 1,
                    currentTime: seconds.break + 1,
                  },
                })
              }
            >
              +
            </button>
            <button
              type="button"
              onClick={() =>
                setSeconds({
                  ...seconds,
                  break: seconds.break - 1,
                  time: {
                    startingTime: seconds.break - 1,
                    currentTime: seconds.break - 1,
                  },
                })
              }
            >
              -
            </button>
          </div>
        </div>

        <div>
          <h2>Long Break </h2>
          <span>{seconds.longBreak}</span>
          <div>
            <button
              type="button"
              onClick={() =>
                setSeconds({
                  ...seconds,
                  longBreak: seconds.longBreak + 1,
                  time: {
                    startingTime: seconds.longBreak + 1,
                    currentTime: seconds.longBreak + 1,
                  },
                })
              }
            >
              +
            </button>
            <button
              type="button"
              onClick={() =>
                setSeconds({
                  ...seconds,
                  longBreak: seconds.longBreak - 1,
                  time: {
                    startingTime: seconds.longBreak - 1,
                    currentTime: seconds.longBreak - 1,
                  },
                })
              }
            >
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
