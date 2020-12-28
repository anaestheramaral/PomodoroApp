/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react';
import { FaPlay, FaUndoAlt, FaStepForward, FaPause } from 'react-icons/fa';
import useSound from 'use-sound';
import { Circle, Container, TimerContainer } from './style';
import NavBar from '../../components/navbar';
import Button from '../../components/button';
import doneAudio from '../../assets/done-notification.mp3';
import {
  useTimerState,
  useTimerDispatch,
} from '../../hooks/timer/TimerContext-copy';

const TimerPomodoro: React.FC = () => {
  const [second, setSecond] = useState(25 * 60);
  const [label, setLabel] = useState('Focus');
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(1);

  const [play] = useSound(doneAudio);
  const { seconds } = useTimerState();
  const dispatch = useTimerDispatch();

  useEffect(() => {
    const id = setInterval(() => {
      if (isRunning && second > 0) {
        // setSecond(s => s - 1);
        dispatch({ type: 'decrement' });
      }
      if (second === 0) {
        play();
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
  }, [isRunning, second, play, label, dispatch]);

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
        setSecond(20 * 60);
      } else {
        setSecond(5 * 60);
      }
    } else {
      setSecond(25 * 60);
    }
  }

  const handleSwitch = () => {
    setIsRunning(false);
    if (label === 'Focus') {
      setLabel('Break');
      if (count === 4) {
        setSecond(20 * 60);
      } else {
        setSecond(5 * 60);
      }
    } else {
      setLabel('Focus');
      setSecond(25 * 60);
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
              // onClick={startTimer}
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
