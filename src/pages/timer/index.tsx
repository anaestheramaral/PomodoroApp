/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaPlay, FaUndoAlt, FaStepForward, FaPause } from 'react-icons/fa';
import { Circle, Container, TimerContainer } from './style';
import NavBar from '../../components/navbar';
import Button from '../../components/button';

const TimerPomodoro: React.FC = () => {
  const [seconds, setSeconds] = useState(6);
  // const [break, setBreak] = useState(5 * 60);
  const [label, setLabel] = useState('Focus');
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(1);

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
      if (isRunning && seconds > 0) {
        setSeconds(s => s - 1);
      }
      if (seconds === 0) {
        handleSwitch();
        if (label === 'Focus') {
          alert('Time for a Break! ☕');
        } else {
          alert('Time to focus! 🎯');
          setCount(c => (c % 4) + 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [isRunning, seconds]);

  function startTimer() {
    setIsRunning(true);
  }
  function pauseTimer() {
    setIsRunning(false);
  }
  function resetTimer() {
    setIsRunning(false);

    if (label === 'Break') {
      if (count === 4) {
        setSeconds(20);
      } else {
        setSeconds(5);
      }
    } else {
      setSeconds(25 * 60);
    }
  }

  const handleSwitch = () => {
    setIsRunning(false);
    if (label === 'Focus') {
      setLabel('Break');
      if (count === 4) {
        setSeconds(20);
      } else {
        setSeconds(5);
      }
    } else {
      setLabel('Focus');
      setSeconds(6);
    }
  };

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
              <p>{label}</p>
            </div>
          </Circle>
          <p>
            {count}
            /4
          </p>
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

            <Button
              type="button"
              onClick={() => {
                handleSwitch();
                if (label === 'Break') {
                  setCount(c => (c % 4) + 1);
                }
              }}
            >
              <FaStepForward />
            </Button>
          </div>
        </TimerContainer>
      </Container>
    </>
  );
};

export default TimerPomodoro;
