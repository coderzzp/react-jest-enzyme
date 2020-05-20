// mocktimer
import React from 'react'
import { shallow } from 'enzyme';

jest.useFakeTimers()

describe('Button 组件测试', () => {
  it('3秒后渲染正常', () => {
    const Button = require('../button').default
    const componentWrapper = shallow(<Button />);
    jest.runAllTimers()
    expect(componentWrapper.html()).toMatchSnapshot();
  });
  
});