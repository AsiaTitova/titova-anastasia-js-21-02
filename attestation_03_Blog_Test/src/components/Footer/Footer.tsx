/* eslint-disable */
import React from 'react';
import './Footer.scss';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { Select } from "antd";
import i18next from "i18next";
import { useTranslation } from 'react-i18next';
import '../../locale/i18next';

const { Option } = Select;

const Footer = () => {
  const { t } = useTranslation();

  const handleChangeLanguage = (value: string) => {
    i18next.changeLanguage(value)
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__company">Dogs Blog 1970-2021</p>
        <ThemeSwitch />
        <Select
          defaultValue={window.localStorage.i18nextLng.split('-')[0]}
          size="small"
          onChange={handleChangeLanguage}
        >
          <Option value="ru">Русский</Option>
          <Option value="en">English</Option>
        </Select>
      </div>
    </footer>
  );
}

export default Footer;
