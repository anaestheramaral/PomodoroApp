import React from 'react';
import Wavefy from 'react-wavify';
// import { ThemeContext } from 'styled-components';

// import { Container } from './styles';

const Wave: React.FC = () => {
  // const theme = useContext(ThemeContext);

  return (
    <Wavefy
      fill="rgba(29, 54, 88, 0.6)"
      paused={false}
      options={{
        height: 30,
        amplitude: 30,
        speed: 0.15,
        points: 3,
      }}
    />
  );
};

export default Wave;
