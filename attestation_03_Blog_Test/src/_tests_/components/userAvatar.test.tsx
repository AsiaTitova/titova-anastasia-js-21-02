import React from 'react';
import { shallow } from 'enzyme';
import UserAvatar from "../../components/Users/UserAvatar/UserAvatar";

describe('Comment component test', () => {
  test('should render comment', () => {
    const wrapper = shallow(<UserAvatar />);
    expect(wrapper.find('div.user-avatar')).toHaveLength(1);
  });

  test('should render info', () => {
    const id = '60d0fe4f5311236168a109ca';
    const firstName = 'Sara';
    const lastName = 'Andersen';
    const wrapper = shallow(<UserAvatar
      id={id}
      firstName={firstName}
      lastName={lastName}
    />);
    expect(wrapper.find('div.user-avatar__tooltip').text()).toBe(`${id}`);
    expect(wrapper.find('span.user-avatar__first-name').text()).toBe(`${firstName}`);
    expect(wrapper.find('span.user-avatar__last-name').text()).toBe(`${lastName}`);
  });
});
