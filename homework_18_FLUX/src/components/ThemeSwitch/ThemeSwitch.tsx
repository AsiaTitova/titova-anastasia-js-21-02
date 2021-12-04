/* eslint-disable */
import React, { useContext } from 'react';
import './ThemeSwitch.scss';
import { Switch } from 'antd';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeSwitch = () => {
  const themeContext = useContext(ThemeContext);
  const onChange = (checked: any): void => {
    themeContext.toggleTheme && themeContext.toggleTheme(checked);
  };

  return (
    <div className="theme-switch">
      <p className="theme-switch__title">Тёмная тема</p>
      <Switch
        onChange={onChange}
      />
    </div>
  );
};

export default ThemeSwitch;
