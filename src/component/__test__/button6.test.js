// snapshot
// import React from 'react'
// import { shallow } from 'enzyme';

jest.useFakeTimers()
jest.mock('../tracker')

const generateComponent = props => {
  const initProps = {};
  const Button = require('../button').default
  return shallow(<Button {...initProps } {...props} />);
};

describe('Button 组件测试', () => {
  beforeEach(()=>{
    jest.resetModules();
  })
  it('渲染正常', () => {
    const componentWrapper = generateComponent()
    expect(componentWrapper.html()).toMatchSnapshot();
  });
  it('props传入buttonName,渲染正常', () => {
    const componentWrapper = generateComponent({buttonName:'mockButtonName'})
    expect(componentWrapper.html()).toMatchSnapshot();
  });
  it('click点击事件测试，mockfn校验', () => {
    const mockClick = jest.fn()
    const componentWrapper = generateComponent({onButtonClick:mockClick})
    componentWrapper.find('.button').at(0).simulate('click')
    expect(mockClick).toHaveBeenCalled();
  });
  it('校验埋点是否被正常调用',() => {
    const {page} = require('../tracker').default
    generateComponent()
    expect(page).toHaveBeenCalledWith('button init')
  });
  it('接口测试',async () => {
    jest.doMock('../services',()=>{
      return ()=>{
        return 'mockdata'
      }
    })
    const componentWrapper = await generateComponent()
    expect(componentWrapper.state('data')).toEqual('mockdata')
  });
  it('3秒后渲染正常', () => {
    const componentWrapper = generateComponent()
    jest.runAllTimers()
    expect(componentWrapper.html()).toMatchSnapshot();
  });
});