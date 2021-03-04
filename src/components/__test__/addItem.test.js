import AddItems from '../AddItems';
import React from 'react';
// import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import { ConstructKit } from "@construct-kit/core";

const list = [{
    _id: '12345',
    name: "sxxx",
    status: 0,
    isEdit: true
}]

jest.mock('react', () => {
    // const originReact = jest.requireActual('react');
    const mUseRef = jest.fn();
    return {
    //   ...originReact,
      useRef: mUseRef,
    };
  });
const fakeEvent = jest.fn();
const fakeProps = {
    list: [{
        _id: '12345',
        name: "sxxx",
        status: 0,
        isEdit: true
    }],
    addToDo: fakeEvent
};
describe('AddItems test', () => {
    it('render AddItems component Button Add', () => {
        const wrapper = render(
            <ConstructKit>
                <AddItems />
            </ConstructKit>
        )
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains('Add')).toBe(true)
    })
    // it('can click Add button', () => {
    //     const mRef = 'txt';
    //     useRef.mockReturnValueOnce(mRef);
    //     const wrapper = shallow(<AddItems {...fakeProps}/>)
    //     // wrapper.instance().addItem = checkedFun;
    //     wrapper.find('.addButton').simulate('click');
    //     expect(fakeEvent).toHaveBeenCalledWith({ _id: ['111','222'], isEdit: true, name: mRef, status: 0 });

    // })

})

//when given then //方法 ，交互，长得什么样子--->某个元素中是否包含你想要的东西 ,事件//react-test-library
//question
//用contractKit render报错
//用shallow 模拟click事件总是走进组件内的addItem事件 我只想使用click调用一个自定义函数 证明可以点击就可以  
//网上查不到，cxss写的太复杂 
//模拟useRef报错