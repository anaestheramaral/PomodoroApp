import { useContext } from 'react';
import { ThemeContext } from './ToggleThemeContext';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useToggleTheme() {
  const context = useContext(ThemeContext);

  return context;
}

export default useToggleTheme;
