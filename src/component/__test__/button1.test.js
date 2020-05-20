// snapshot
import React from 'react'
import { shallow } from 'enzyme';

describe('Button 组件测试', () => {
  it('渲染正常', () => {
    const Button = require('../button').default
    const componentWrapper = shallow(<Button />);
    expect(componentWrapper.html()).toMatchSnapshot();
  });
  it('props传入buttonName,渲染正常', () => {
    const Button = require('../button').default
    const componentWrapper = shallow(<Button buttonName={'mockButtonName'}/>);
    expect(componentWrapper.html()).toMatchSnapshot();
  });
});