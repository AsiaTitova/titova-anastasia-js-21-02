import React from 'react';
import './ThemeSwitch.scss';

import { ThemeContextConsumer, ThemeContextState } from '../../../context/ThemeContext';

export class ThemeSwitch extends React.Component {
  render(): React.ReactNode {
    return (
      <ThemeContextConsumer>
        {
          (context: Partial<ThemeContextState>) => (
            <div className="theme-switch">
              <label className="theme-switch__label" htmlFor="dark-toggle">
                <p className="theme-switch__title">Тёмная тема</p>
                <input
                  className="theme-checkbox__input"
                  checked={context.darkTheme}
                  type="checkbox"
                  id="dark-toggle"
                  onClick={context.toggleTheme}
                />
              </label>
            </div>
          )
        }
      </ThemeContextConsumer>
    );
  }
}
