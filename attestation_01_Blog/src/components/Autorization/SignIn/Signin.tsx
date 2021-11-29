/* eslint-disable */

import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form, Input} from 'antd';
import * as actions from '../../../redux/actions/auth';
import { State } from '../../../types/state';

import './SignIn.scss';

interface Props {
  id?: string;
  login: (id: string) => any;
  loading?: boolean;
  error?: string;
}

const Signin = ({ login }: Props) => {
  const [form] = Form.useForm();
  const history = useHistory();

  const signInHandler = () => {
    form
      .validateFields()
      .then((fields) => {
        login(fields.id);
        history.push(`/user/${fields.id}`)
      })
      .catch(() => {
       alert('Незаполнены обязательные поля, заполните форму!');
      });
  };

  return (
    <div className="signin">
      <div className="signin__container">
        <h1 className="signin__title">Вход</h1>
        <Form layout="horizontal"
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 50,
              }} form={form}>
          <Form.Item
            label="ID:"
            name="id"
            rules={[
              {
                required: true,
                message: 'Необходимо обязательно указать свой ID',
              },
            ]}
          >
            <Input placeholder="Введите свой ID" />
          </Form.Item>
          <div className="signin__footer">
            <Button type="primary" className="login__enter" onClick={signInHandler}>
              Войти
            </Button>
            <p className="signin__link">
              Ещё нет аккаунта?
              <Link to="/login">Зарегистрироваться</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

Signin.defaultProps = {
  id: '',
  username: '',
  error: '',
};

export default connect(
  (state: State) => ({
    id: state.auth.id,
    loading: state.auth.loading,
    error: state.auth.error,
  }),
  (dispatch: any) => bindActionCreators(actions, dispatch),
)(Signin);
