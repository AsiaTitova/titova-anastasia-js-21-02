import React, { ChangeEvent, useContext } from 'react';
import './ThemeSwitch.scss';
import { ThemeContext } from '../../../context/ThemeContext';

const ThemeSwitch = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="theme-switch">
      <label className="theme-switch__label" htmlFor="dark-toggle">
        <p className="theme-switch__title">Тёмная тема</p>
        <input
          className="theme-checkbox__input"
          checked={themeContext.darkTheme}
          type="checkbox"
          id="dark-toggle"
          onChange={(event: ChangeEvent<HTMLInputElement>) => themeContext.toggleTheme && themeContext.toggleTheme(event.target.checked)}
        />
      </label>
    </div>
  );
};

export default ThemeSwitch;
