/* eslint-disable */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form, Input } from 'antd';
import * as actions from '../../../redux/actions/auth';
import { State } from '../../../types/state';

import './SignIn.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  login: (id: string) => any;
}

const Signin = ({ login }: Props) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const history = useHistory();

  const signInHandler = () => {
    form
      .validateFields()
      .then((fields) => {
        login(fields.id);
        history.push(`/user/${fields.id}`);
      })
      .catch(() => {
        alert('Незаполнены обязательные поля, заполните форму!');
      });
  };

  return (
    <div className="signin">
      <div className="signin__container">
        <h1 className="signin__title">{t('signIn.title')}</h1>
        <Form
          form={form}
          layout="horizontal"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 50,
          }}
        >
          <Form.Item
            label="ID:"
            name="id"
            rules={[
              {
                required: true,
                message: t('signIn.input'),
              },
              {
                pattern: new RegExp(/^[a-z0-9]+$/i),
                message: t('signIn.IDRule'),
              },
            ]}
          >
            <Input placeholder={t('signIn.input')} />
          </Form.Item>
          <div className="signin__footer">
            <Button type="primary" className="login__enter" onClick={signInHandler}>
              {t('signIn.title')}
            </Button>
            <p className="signin__link">
              {t('signIn.noAccount')}
              <Link to="/login">{t('logIn.title')}</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default connect(
  (state: State) => ({
    id: state.auth.id,
    loading: state.auth.loading,
    error: state.auth.error,
  }),
  (dispatch: any) => bindActionCreators(actions, dispatch),
)(Signin);
