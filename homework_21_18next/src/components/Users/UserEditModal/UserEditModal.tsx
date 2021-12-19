/* eslint-disable */
import './UserEditModal.scss';
import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Select,
} from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import locale from 'antd/es/date-picker/locale/ru_RU';
import { UserType } from '../../../types/types';
import { State } from '../../../types/state';
import * as actions from '../../../redux/actions/users';
import { METHOD_POST } from '../../../constants/constants';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

interface Props {
  user: UserType;
  updateCurrentUser: (user: UserType, id: string) => any;
  onUserEditModalClose: () => void;
}

const UserEdit = ({ user, onUserEditModalClose, updateCurrentUser }: Props) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const file = React.createRef<HTMLInputElement>();
  const [redirect] = useState(false);
  const [userId] = useState('' as string);

  const deleteAvatar = (): void => {
    user?.id && updateCurrentUser({ id: user.id, picture: '' }, user.id);
  };

  const updateAvatar = (): void => {
    if (user?.id && file.current?.files?.length === 1) {
      file.current?.files[0].arrayBuffer().then((fileData) => {
        const formData = new FormData();
        formData.set('expiration', '1000000');
        formData.set('key', '088d58f291c75261ffb031dc80ebaa5b');
        formData.set('image', new Blob([fileData]));

        return fetch('https://api.imgbb.com/1/upload', {
          method: METHOD_POST,
          body: formData,
        }).then((response) => response.json())
          .then((response) => {
            user?.id && updateCurrentUser({ id: user.id, picture: response.data.display_url }, user.id);
          });
      });
    }
  };

  const onChange = (value: any): void => {
    console.log('changed', value);
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

    user?.id && updateCurrentUser({
      id: user.id,
      firstName,
      lastName,
      email,
      phone,
      gender,
      dateOfBirth,
      picture,
      title,
    }, user.id);
    onUserEditModalClose();
  };

  return redirect
    ? (<Redirect to={`/user/${userId}`} />)
    : (
      <div className="edit-modal">
        <div className="edit-modal__modal">
          <div className="edit-modal__form">
            <h1 className="edit-modal__title">{t('profile.editProfile')}</h1>
            <div className="edit-modal__picture-wrap">
              <img className="edit-modal__picture" src={user && user.picture} alt="avatar" />
              <input
                ref={file}
                type="file"
                id="avatar-file"
                className="visually-hidden"
                multiple
                accept="image/*"
                key="avatar_file"
                onChange={updateAvatar}
              />
              {user.picture && user.picture.length > 0 ? (
                [
                  <div
                    className="edit-modal__avatar"
                    style={{ backgroundImage: 'URL('.concat(user.picture, ')') }}
                    key="avatar"
                  />,

                  <div className="edit-modal__avatar_controls" key="avatar_controls">
                    <label className="edit-modal__label-file ant-btn ant-btn-primary" htmlFor="avatar-file">{t('profile.addPhoto')}</label>
                    <Button type="primary" className="edit-modal__avatar-upload" onClick={() => file.current?.click()}>
                      {t('profile.chooseAnother')}
                    </Button>
                    <Divider type="vertical" className="edit-modal__divider" />
                    <Button type="primary" className="edit-modal__avatar-remove" danger onClick={deleteAvatar}>
                      {t('system.delete')}
                    </Button>
                  </div>,
                ]
              ) : (
                <div className="edit-modal__avatar_controls">
                  <Button type="primary" className="edit-modal__avatar-upload" onClick={() => file.current?.click()}>
                    {t('profile.uploadPhoto')}
                  </Button>
                </div>
              )}
            </div>
            <Form
              id="edit-modal-form"
              name="basic"
              labelCol={{
                span: 10,
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
              >
                <Input placeholder={t('profile.firstNamePlaceholder')} defaultValue={user && user.firstName} prefix={<UserOutlined />} />
              </Form.Item>
              <Form.Item
                label={t('profile.lastNameLabel')}
                name="lastName"
              >
                <Input placeholder={t('profile.lastNamePlaceholder')} defaultValue={user && user.lastName} prefix={<UserOutlined />} />
              </Form.Item>
              <Form.Item
                label={t('profile.titleLabel')}
                name="title"
              >
                <Select placeholder={t('profile.titlePlaceholder')} defaultValue={user && user.title} allowClear>
                  <Option value="mr">mr</Option>
                  <Option value="ms">ms</Option>
                  <Option value="mrs">mrs</Option>
                  <Option value="miss">miss</Option>
                </Select>
              </Form.Item>
              <div className="edit-modal__wrap">
                <Form.Item
                  name="gender"
                  label={t('profile.genderLabel')}
                >
                  <Select placeholder={t('profile.genderLabel')} allowClear defaultValue={user && user.gender}>
                    <Option value="male">{t('profile.maleType')}</Option>
                    <Option value="female">{t('profile.femaleType')}</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="dateOfBirth" label={t('profile.birthDateLabel')}>
                  {user && user.dateOfBirth && <DatePicker defaultValue={moment(new Date(user.dateOfBirth), 'YYYY-MM-DD')} locale={locale} /> }
                </Form.Item>
              </div>
              <Form.Item
                wrapperCol={{
                  offset: 4,
                  span: 16,
                }}
              />
              <div className="edit-modal__wrap">
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: 'email',
                      message: t('logIn.emailRule'),
                    },
                  ]}
                >
                  <Input placeholder={t('profile.emailPlaceholder')} prefix={<MailOutlined />} defaultValue={user && user.email} />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label={t('profile.phoneLabel')}
                  rules={[
                    {
                      pattern: new RegExp(/^8\d{10}$/i),
                      message: t('logIn.phoneRule'),
                    },
                  ]}
                >
                  <InputNumber
                    placeholder="8XXX-XXX-XXXX"
                    controls={false}
                    style={{
                      width: '100%',
                    }}
                    onChange={onChange}
                    defaultValue={user && user.phone}
                  />
                </Form.Item>
              </div>
              <div className="edit-modal__footer">
                <Button type="primary" className="edit-modal__cancel" onClick={onUserEditModalClose}>
                  {t('system.cancel')}
                </Button>
                <Button type="primary" className="edit-modal__enter" htmlType="submit">
                  {t('system.save')}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
};

export default connect(
  (state: State) => ({
    error: state.users.error,
  }),
  (dispatch: any) => bindActionCreators(actions, dispatch),
)(UserEdit);
