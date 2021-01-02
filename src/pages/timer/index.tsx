/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState, useContext } from 'react';
import { FaPlay, FaUndoAlt, FaStepForward, FaPause } from 'react-icons/fa';
import useSound from 'use-sound';
// import { useSpring, animated } from 'react-spring';
import { Circle, Container, TimerContainer } from './style';
import Button from '../../components/button';
import doneAudio from '../../assets/done-notification.mp3';
import { TimerContext } from '../../hooks/timer/TimerContext';
import { useStartState } from '../../hooks/autoStart/StartContext';

const TimerPomodoro: React.FC = () => {
  const { seconds, setSeconds } = useContext(TimerContext);
  const [count, setCount] = useState(1);

  const [play] = useSound(doneAudio);
  const { autoStart } = useStartState();
  useEffect(() => {
    const id = setInterval(() => {
      if (seconds.isActive === true && seconds.time.currentTime > 0) {
        setSeconds({
          ...seconds,
          time: {
            startingTime: seconds.time.startingTime,
            currentTime: seconds.time.currentTime - 1,
          },
        });
      }
      if (seconds.time.currentTime === 0) {
        play();
        // setSeconds({ ...seconds, isActive: false });
        handleSwitch();
        if (seconds.label !== 'Focus') {
          setCount(c => (c % 4) + 1);
          alert('Time to focus! 🎯');
        } else {
          alert('Time for a Break! ☕');
        }
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [seconds, play]);

  const handleSwitch = () => {
    if (seconds.label === 'Focus') {
      if (count === 4) {
        setSeconds({
          ...seconds,
          time: {
            startingTime: seconds.longBreak,
            currentTime: seconds.longBreak,
          },
          label: 'Break',
          isActive: autoStart,
        });
      } else {
        // alert('Time for a Break! ☕');
        setSeconds({
          ...seconds,
          time: {
            currentTime: seconds.break,
            startingTime: seconds.break,
          },
          label: 'Break',
          isActive: autoStart,
        });
      }
    } else {
      // alert('Time to focus! 🎯');
      setSeconds({
        ...seconds,
        time: {
          startingTime: seconds.session,
          currentTime: seconds.session,
        },
        label: 'Focus',
        isActive: autoStart,
      });
    }
  };
  function startTimer() {
    setSeconds({ ...seconds, isActive: true });
  }
  function pauseTimer() {
    setSeconds({ ...seconds, isActive: false });
  }
  function resetTimer() {
    setSeconds({
      ...seconds,
      isActive: autoStart,
      time: {
        startingTime: seconds.time.startingTime,
        currentTime: seconds.time.startingTime,
      },
    });
  }

  return (
    <>
      <Container>
        {/* <NavBar /> */}
        <TimerContainer>
          <Circle>
            <div>
              <strong>
                {`${Math.floor(seconds.time.currentTime / 60)}:${`00${
                  seconds.time.currentTime % 60
                }`.slice(-2)}`}
              </strong>
              <p>{seconds.label}</p>
            </div>
          </Circle>
          <p>
            {count}
            /4
          </p>
          <div>
            <Button type="button" onClick={resetTimer} title="reset">
              <FaUndoAlt />
            </Button>

            <Button
              type="button"
              title={seconds.isActive ? 'pause' : 'play'}
              onClick={seconds.isActive ? pauseTimer : startTimer}
              className="Play"
            >
              {seconds.isActive ? <FaPause /> : <FaPlay />}
            </Button>

            <Button
              type="button"
              title="next"
              onClick={() => {
                handleSwitch();
                if (seconds.label === 'Break') {
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
