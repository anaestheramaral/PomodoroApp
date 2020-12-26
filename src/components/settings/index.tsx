import React, { useState, useContext } from 'react';
// import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { Container, ControllersWrapper, Wrapper } from './style';
import useToggleTheme from '../../hooks/useToggleTheme';

const Configs: React.FC = () => {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(20);

  const [checkedAutoPlay, setCheckedAutoPlay] = useState(false);
  // const [checkedDark, setCheckedDark] = useState(false);

  const { toggleTheme } = useToggleTheme();
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <h1>Settings</h1>
      <ControllersWrapper>
        <div>
          <h2>Focus Time</h2>
          <span>{pomodoro}</span>
          <div>
            <button type="button" onClick={() => setPomodoro(p => p + 1)}>
              +
            </button>
            <button type="button" onClick={() => setPomodoro(p => p - 1)}>
              -
            </button>
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
        />
      </Wrapper>
    </Container>
  );
};

export default Configs;
