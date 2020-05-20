// jest.doMock
import React from 'react'
import { shallow } from 'enzyme';

describe('Button 组件测试',  () => {
  it('校验埋点是否被正常调用',() => {
    // 生成一个mock函数
    const page = jest.fn()
    // 声明模拟 tracker 这个模块
    jest.doMock('../tracker',()=>{
      return {page}
    })
    const Button = require('../button').default
    shallow(<Button />);
    // mock函数被调用
    expect(page).toHaveBeenCalledWith('button init')
  });
});