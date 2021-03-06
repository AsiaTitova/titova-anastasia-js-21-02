/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './Registration.scss';
import moment from 'moment';
import 'moment/locale/ru';
import {
  Form, Input, Button, Select, DatePicker, InputNumber, message,
} from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import locale from 'antd/es/date-picker/locale/ru_RU';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { UserType } from '../../types/types';
import { State } from "../../types/state";
import { createUser } from "../../api/dumMyApi";
import {successCurrentUsersActions} from "../../redux/actions/user";

interface Props {
  loadSuccess?: (user: UserType) => any,
}

const { Option } = Select;
const selectBefore = (
  <Select defaultValue="+7" style={{ width: 70 }}>
    <Option value="+7">+7</Option>
    <Option value="8">8</Option>
  </Select>
);

export const Registration = ({ loadSuccess }: Props) => {
  const [form] = Form.useForm();
  const [redirect, setRedirect] = useState(false);
  const [userId, setUserId] = useState('');

  const onChange = (value: any): void => {
    console.log('changed', value);
  };

  const createUserCallback = (body: UserType): void => {
    createUser(body, (resp: UserType) => {
      if(loadSuccess) {
        loadSuccess(resp);
      }
      if ("id" in resp && resp.id) {
        setUserId(resp.id)
        setRedirect(true);
      }
    }, (error: any) => alert(error));
  };



  const onFinish = (values: UserType) => {
    const {
      firstName, lastName, email, phone, gender, picture, title,
    } = values;
    const isDateOfBirth = values.dateOfBirth;

    let dateOfBirth;
    if (isDateOfBirth) {
      dateOfBirth = moment(new Date(isDateOfBirth), 'MM/DD/YYYY').toString();
    }

    createUserCallback({
      firstName, lastName, email, phone, gender, dateOfBirth, picture, title,
    })
  };

  return redirect
    ? (<Redirect to={`/user/${userId}`} />)
    : (
      <div className="registration">
        <div className="registration__container">
          <h1 className="registration__title">?????????????????????? ????????????????????????</h1>
          <Form
            id="registration-form"
            name="basic"
            labelCol={{
              span: 10,
            }}
            wrapperCol={{
              span: 30,
            }}
            form={form}
            onFinish={onFinish}
            autoComplete="off"
          >
            <div className="registration__wrap">
              <Form.Item
                label="??????"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: '???????????????????????? ????????',
                  },
                ]}
              >
                <Input placeholder="?????????????? ??????..." prefix={<UserOutlined />} />
              </Form.Item>
              <Form.Item
                label="??????????????"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: '???????????????????????? ????????',
                  },
                ]}
              >
                <Input placeholder="?????????????? ??????????????..." prefix={<UserOutlined />} />
              </Form.Item>
              <Form.Item
                label="??????????????????"
                name="title"
              >
                <Select placeholder="?????? ?? ?????? ?????????????????????" allowClear>
                  <Option value="mr">mr</Option>
                  <Option value="ms">ms</Option>
                  <Option value="mrs">mrs</Option>
                  <Option value="miss">miss</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="registration__wrap">
              <Form.Item
                name="gender"
                label="??????"
              >
                <Select placeholder="?????? ??????" allowClear>
                  <Option value="male">??????????????</Option>
                  <Option value="female">??????????????</Option>
                  <Option value="other">????????????</Option>
                </Select>
              </Form.Item>
              <Form.Item name="dateOfBirth" label="???????? ????????????????">
                <DatePicker defaultValue={moment(new Date(), 'YYYY-MM-DD')} locale={locale} />
              </Form.Item>
            </div>
            <Form.Item
              wrapperCol={{
                offset: 4,
                span: 16,
              }}
            />
            <div className="registration__wrap">
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: '???????????????????????? ?????????????????????? ??????????',
                  },
                  {
                    required: true,
                    message: '???????????????????????? ????????',
                  },
                ]}
              >
                <Input placeholder="?????????????? Email..." prefix={<MailOutlined />} />
              </Form.Item>
              <Form.Item
                name="phone"
                label="?????????? ????????????????"
              >
                <InputNumber
                  addonBefore={selectBefore}
                  placeholder="XXX-XXX-XX-XX"
                  controls={false}
                  style={{
                    width: '100%',
                  }}
                  onChange={onChange}
                />
              </Form.Item>
            </div>
            <Form.Item
              label="????????????????"
              name="picture"
              rules={[
                {
                  type: 'url',
                  message: '?????????????? url ????????????????',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              ??????????????????????
            </Button>
          </Form>
        </div>
      </div>
    );
};

export default connect(
  (state: State) => ({
    user: state.user.currentUser,
    loading: state.user.loading,
    error: state.user.error,
  }),
  (dispatch: any) => ({
    loadSuccess: bindActionCreators(successCurrentUsersActions, dispatch),
  }),
)(Registration);
