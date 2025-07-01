import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function UseContextOne() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

export default UseContextOne;