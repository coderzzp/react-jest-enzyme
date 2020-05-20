// simulate click
import React from 'react'
import { shallow } from 'enzyme';


describe('Button 组件测试', () => {
  it('click点击事件测试，mockfn校验', () => {
    const mockClick = jest.fn()
    const Button = require('../button').default
    const componentWrapper = shallow(<Button onButtonClick={mockClick}/>);
    componentWrapper.find('.button').at(0).simulate('click')
    expect(mockClick).toHaveBeenCalled();
  });
});