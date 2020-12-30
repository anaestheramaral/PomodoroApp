import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeContextProvider } from './hooks/theme/ToggleThemeContext';
import { TimerProvider } from './hooks/timer/TimerContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <TimerProvider>
        <App />
      </TimerProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
