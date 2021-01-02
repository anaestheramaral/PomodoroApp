import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeContextProvider } from './hooks/theme/ToggleThemeContext';
import { TimerProvider } from './hooks/timer/TimerContext';
import { StartProvider } from './hooks/autoStart/StartContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <StartProvider>
        <TimerProvider>
          <App />
        </TimerProvider>
      </StartProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
