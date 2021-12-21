/* eslint-disable */
import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import './LogIn.scss';
import moment from 'moment';
import 'moment/locale/ru';
import {
  Form, Input, Button, Select, DatePicker, InputNumber,
} from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import locale from 'antd/es/date-picker/locale/ru_RU';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../redux/actions/users';
import { State } from '../../../types/state';
import { UserType } from '../../../types/types';
import { createUser } from '../../../api/dumMyApi';
import { useTranslation } from 'react-i18next';
import {createNewUser} from "../../../redux/actions/users";

const { Option } = Select;

export const Login = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const error = useSelector((state: any) => state.auth.error);
  const loading = useSelector((state: any) => state.auth.loading,);
  const [userId, setUserId] = useState('' as string);
  const history = useHistory();

  const onChange = (value: any): void => {
    console.log('changed', value);
  };

  const onFinish = (values: UserType) => {
    const isDateOfBirth = values.dateOfBirth;
    let dateOfBirth;
    if (isDateOfBirth) {
      dateOfBirth = moment(new Date(isDateOfBirth), 'MM/DD/YYYY').toString();
    }
    dispatch(createNewUser(values))
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">{t('logIn.title')}</h1>
        <Form
          id="login-form"
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 50,
          }}
          form={form}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label={t('profile.firstNameLabel')}
            name="firstName"
            rules={[
              {
                required: true,
                message: t('signIn.required'),
              },
              {
                pattern: new RegExp(/^[A-zА-я \\-]+$/i),
                message: t('logIn.nameRule'),
              },
            ]}
          >
            <Input placeholder={t('profile.firstNamePlaceholder')} prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            label={t('profile.lastNameLabel')}
            name="lastName"
            rules={[
              {
                required: true,
                message: t('signIn.required'),
              },
              {
                pattern: new RegExp(/^[A-zА-я \\-]+$/i),
                message: t('logIn.nameRule'),
              },
            ]}
          >
            <Input placeholder={t('profile.lastNamePlaceholder')} prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            label={t('profile.titleLabel')}
            name="title"
          >
            <Select placeholder={t('profile.titlePlaceholder')} allowClear>
              <Option value="mr">mr</Option>
              <Option value="ms">ms</Option>
              <Option value="mrs">mrs</Option>
              <Option value="miss">miss</Option>
            </Select>
          </Form.Item>
          <div className="login__wrap">
            <Form.Item
              name="gender"
              label={t('profile.genderLabel')}
            >
              <Select placeholder={t('profile.genderLabel')} allowClear>
                <Option value="male">{t('profile.maleType')}</Option>
                <Option value="female">{t('profile.femaleType')}</Option>
              </Select>
            </Form.Item>
            <Form.Item name="dateOfBirth" label={t('profile.birthDateLabel')}>
              <DatePicker defaultValue={moment(new Date(), 'YYYY-MM-DD')} locale={locale} />
            </Form.Item>
          </div>
          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 16,
            }}
          />
          <div className="login__wrap">
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: t('logIn.emailRule'),
                },
                {
                  required: true,
                  message: t('signIn.required'),
                },
                {
                  pattern: new RegExp(/^[A-z0-9._-]+@[A-z0-9._-]+.[A-z0-9._-]{1,3}$/i),
                  message: t('logIn.emailSecondRule'),
                },
              ]}
            >
              <Input placeholder={t('profile.emailPlaceholder')} prefix={<MailOutlined />} />
            </Form.Item>
            <Form.Item
              name="phone"
              label={t('profile.phoneLabel')}
              rules={[
                {
                  pattern: new RegExp(/^\8\d{10}$/i),
                  message: t('logIn.phoneRule'),
                },
              ]}
            >
              <InputNumber
                placeholder="8XXXXXXXXXX"
                controls={false}
                style={{
                  width: '100%',
                }}
                onChange={onChange}
              />
            </Form.Item>
          </div>
          <Form.Item
            label={t('logIn.avatarLabel')}
            name="picture"
            rules={[
              {
                type: 'url',
                message: 'Введите url аватарки',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div className="login__footer">
            <Button type="primary" htmlType="submit">
              {t('logIn.title')}
            </Button>
            <p className="login__link">
              {t('logIn.haveAccount')}
              <Link to="/signin"> {t('signIn.title')}</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
