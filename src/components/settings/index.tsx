/* eslint-disable react/jsx-curly-newline */
import React, { useContext } from 'react';
// import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from 'polished';
import { Container, ControllersWrapper, Wrapper } from './style';
import useToggleTheme from '../../hooks/theme/useToggleTheme';
import {
  useStartDispatch,
  useStartState,
} from '../../hooks/autoStart/StartContext';
import { TimerContext } from '../../hooks/timer/TimerContext';

const Configs: React.FC = () => {
  const theme = useContext(ThemeContext);
  const { seconds, setSeconds } = useContext(TimerContext);

  const { toggleTheme } = useToggleTheme();
  const dispach = useStartDispatch();
  const { autoStart } = useStartState();

  return (
    <Container>
      <h1>Settings</h1>
      <ControllersWrapper>
        <div>
          <h2>Focus Time</h2>
          <span>{seconds.session / 60}</span>
          <div>
            <button
              type="button"
              onClick={() =>
                setSeconds({
                  ...seconds,
                  session: seconds.session + 60,
                  time: {
                    startingTime: seconds.session + 60,
                    currentTime: seconds.session + 60,
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
                  session: seconds.session - 60,
                  time: {
                    startingTime: seconds.session - 60,
                    currentTime: seconds.session - 60,
                  },
                })
              }
            >
              -
            </button>
          </div>
        </div>

        <div>
          <h2>Short Break</h2>
          <span>{seconds.break / 60}</span>
          <div>
            <button
              type="button"
              onClick={() =>
                setSeconds({
                  ...seconds,
                  break: seconds.break + 60,
                  time: {
                    startingTime: seconds.break + 60,
                    currentTime: seconds.break + 60,
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
                  break: seconds.break - 60,
                  time: {
                    startingTime: seconds.break - 60,
                    currentTime: seconds.break - 60,
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
          <span>{seconds.longBreak / 60}</span>
          <div>
            <button
              type="button"
              onClick={() =>
                setSeconds({
                  ...seconds,
                  longBreak: seconds.longBreak + 60,
                  time: {
                    startingTime: seconds.longBreak + 60,
                    currentTime: seconds.longBreak + 60,
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
                  longBreak: seconds.longBreak - 60,
                  time: {
                    startingTime: seconds.longBreak - 60,
                    currentTime: seconds.longBreak - 60,
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
          id="autoSwitch"
          checked={autoStart === true}
          onChange={() => dispach({ type: 'toggleStart' })}
          offColor={shade(0.15, theme.colors.secondary)}
          onColor={theme.colors.primary}
          height={26}
        />
      </Wrapper>
      <Wrapper>
        <strong>Dark mode</strong>
        <Switch
          id="darkSwitch"
          checked={theme.title !== 'light'}
          onChange={toggleTheme}
          offColor={shade(0.15, theme.colors.secondary)}
          onColor={theme.colors.primary}
          height={26}
        />
      </Wrapper>
      <button
        type="button"
        onClick={() =>
          setSeconds({
            ...seconds,
            session: 25 * 60,
            break: 5 * 60,
            longBreak: 20 * 60,
            time: {
              startingTime: 25 * 60,
              currentTime: 25 * 60,
            },
            label: 'Focus',
          })
        }
      >
        Reset Timer Settings
      </button>
    </Container>
  );
};

export default Configs;
