/* eslint-disable */

import './UserEdit.scss';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment, { Moment } from 'moment';
import { Alert, Button, Divider, Form, Spin } from 'antd';
import { UserType } from '../../../types/types';
import { State } from '../../../types/state';
import * as actions from '../../../redux/actions/users';

interface Props {
  user: UserType;
  error?: string;
  updateUser: (user: UserType, edit: boolean) => {};
  uploadAvatar: (id: string, file: Blob) => {};
  isLoading: boolean;
}

const UserEdit = ({ user, error, updateUser, uploadAvatar, isLoading }: Props) => {
  const [form] = Form.useForm();
  const file = React.createRef<HTMLInputElement>();

  const deleteAvatar = (): void => {
    user?.id && updateUser({ id: user.id, picture: '' }, true);
  };

  const updateAvatar = (): void => {
    if (user?.id && file.current?.files?.length === 1) {
      file.current?.files[0].arrayBuffer().then((fileData) => {
        uploadAvatar(user.id as string, new Blob([fileData]));
      });
    }
  };

  const updateInfo = (): void => {
    form
      .validateFields()
      .then((fields: any) => {
        const oldValues = Object(user);
        const userData: UserType = Object.entries(fields)
          .filter((value) => value[1] !== oldValues[value[0]])
          .reduce((obj, e) => ({ ...obj, [e[0]]: e[1] }), {});

        delete userData.registerDate;
        delete userData.dateOfBirth;

        if (
          fields.dateOfBirth &&
          (fields.dateOfBirth as Moment).format('YYYY-MM-DD') !== moment(user.dateOfBirth).format('YYYY-MM-DD')
        ) {
          userData.dateOfBirth = (fields.dateOfBirth as Moment).format('YYYY-MM-DD');
        }

        userData.id = user.id;
        updateUser(userData, false);
      })
      .catch(() => {
        error = 'Незаполнены обязательные поля, заполните форму!';
      });
  };
  return (
    <Spin spinning={isLoading}>
      <section className="user-edit ">
        <input
          ref={file}
          type="file"
          className="user-edit__hide"
          multiple
          accept="image/*"
          key="avatar_file"
          onChange={updateAvatar}
        />
        {error && error.length > 0 && <Alert>{error}</Alert>}
        {user.picture && user.picture.length > 0 ? (
          [
            <div
              className="user-edit__avatar"
              style={{ backgroundImage: 'URL('.concat(user.picture, ')') }}
              key="avatar"
            />,

            <div className="user-edit__avatar_controls" key="avatar_controls">
              <Button type="primary" className="user-edit__avatar-upload" onClick={() => file.current?.click()}>
                Обновить фотографию
              </Button>
              <Divider type="vertical" className="user-edit__divider" />
              <Button type="primary" className="user-edit__avatar-remove" danger onClick={deleteAvatar}>
                Удалить фотографию
              </Button>
            </div>,
          ]
        ) : (
          <div className="user-edit__avatar_controls">
            <Button type="primary" className="user-edit__avatar-upload" onClick={() => file.current?.click()}>
              Загрузить фотографию
            </Button>
          </div>
        )}
      </section>
    </Spin>
  );
};

UserEdit.defaultProps = {
  error: '',
};

export default connect(
  (state: State) => ({
    error: state.users.error,
  }),
  (dispatch: any) => bindActionCreators(actions, dispatch),
)(UserEdit);
