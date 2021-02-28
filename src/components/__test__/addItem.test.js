import AddItems from '../AddItems';
import React from 'react';
import {shallow} from 'enzyme';

test('render AddItems component',()=>{
    const wrapper=shallow(
        <AddItems/>
    )
    expect(wrapper).toMatchSnapshot();
})
//when given then //方法 ，交互，长得什么样子--->某个元素中是否包含你想要的东西 ,事件//react-test-library