import React from 'react';
import { FaPlay, FaUndoAlt, FaStepForward } from 'react-icons/fa';
import { Circle, Container, TimerContainer } from './style';
import NavBar from '../../components/navbar';
import Button from '../../components/button';

const Timer: React.FC = () => {
  return (
    <>
      <Container>
        <NavBar />
        <TimerContainer>
          <Circle>
            <div>
              <strong>25:00</strong>
              <p>focus</p>
            </div>
          </Circle>
          <div>
            <Button type="button">
              <FaUndoAlt />
            </Button>

            <Button type="button" className="Play">
              <FaPlay />
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

export default Timer;
