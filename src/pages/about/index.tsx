import React from 'react';
import { Container, ContentWrapper } from './styles';

const About: React.FC = () => {
  return (
    <Container>
      <h1>About</h1>
      <ContentWrapper>
        <p>
          The
          <strong> Pomodoro Techinique </strong>
          is a time managment method developed by the Italian Francesco Cirilo,
          who was at the time a student.
        </p>
        <br />
        <p>
          The Method consists on cicles of concentration and breaks. The focus
          durations is usually set to be 25 minutes, and during this time all
          distractions should be avoided.
        </p>
        <br />
        <p>
          After, comes the break, that should be around 3-5 minutes. However,
          the duration of the 4th break are higher (15-30 minutes).
        </p>
        <br />
        <p>Summaring: </p>
        <p>
          <br />
          <ol>
            <li>Decide on the task to be done.</li>
            <li>Set the pomodoro timer (traditionally to 25 minutes).</li>
            <li>Work on the task.</li>
            <li>
              End work when the timer rings and put a checkmark on a piece of
              paper.
            </li>
            <li>
              If you have fewer than four checkmarks, take a short break (3–5
              minutes) and then return to step 2, otherwise continue to step 6.
            </li>
            <li>
              After four pomodoros, take a longer break (15–30 minutes), reset
              your checkmark count to zero, then go to step 1.
            </li>
          </ol>
        </p>
        <p className="font">
          <small>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            Font:{' '}
            <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
              https://en.wikipedia.org/wiki/Pomodoro_Technique
            </a>
          </small>
        </p>
      </ContentWrapper>
    </Container>
  );
};

export default About;
