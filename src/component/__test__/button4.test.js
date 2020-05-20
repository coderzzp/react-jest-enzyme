// mock async function
import React from 'react'
import { shallow } from 'enzyme';


describe('Button 组件测试',  () => {
  it('接口测试',async () => {
    jest.doMock('../services',()=>{
      return ()=>{
        return 'mockdata'
      }
    })
    const Button = require('../button').default
    const componentWrapper = await shallow(<Button />);

    expect(componentWrapper.state('data')).toEqual('mockdata')
  });
});