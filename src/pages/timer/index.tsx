/* eslint-disable no-else-return */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { FaPlay, FaUndoAlt, FaStepForward, FaPause } from 'react-icons/fa';
import { Circle, Container, TimerContainer } from './style';
import NavBar from '../../components/navbar';
import Button from '../../components/button';

const TimerPomodoro: React.FC = () => {
  // const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  // useEffect(() => {
  //   if (isRunning) {
  //     const id = setInterval(
  //       // eslint-disable-next-line no-shadow
  //       () => setSeconds(seconds => seconds - 1),
  //       1000,
  //     );
  //     return () => clearInterval(id);
  //   } else {}
  // }, [isRunning]);

  useEffect(() => {
    const id = setInterval(() => {
      if (isRunning) {
        setSeconds(s => s - 1);
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [isRunning]);

  function startTimer() {
    setIsRunning(true);
  }
  function pauseTimer() {
    setIsRunning(false);
  }
  function resetTimer() {
    setIsRunning(false);
    setSeconds(25 * 60);
  }

  return (
    <>
      <Container>
        <NavBar />
        <TimerContainer>
          <Circle>
            <div>
              <strong>
                {`${Math.floor(seconds / 60)}:${`00${seconds % 60}`.slice(-2)}`}
              </strong>
              <p>focus</p>
            </div>
          </Circle>
          <div>
            <Button type="button" onClick={resetTimer}>
              <FaUndoAlt />
            </Button>

            <Button
              type="button"
              onClick={isRunning ? pauseTimer : startTimer}
              className="Play"
            >
              {isRunning ? <FaPause /> : <FaPlay />}
            </Button>

            <Button type="button">
              <FaStepForward />
            </Button>
          </div>
        </TimerContainer>
      </Container>
    </>
  );
};

export default TimerPomodoro;
