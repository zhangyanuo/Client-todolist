import ListWrap from '../ListItems';
import React from 'react';
import {shallow} from 'enzyme';

test('render listWrap component',()=>{
    const list ={
        _id:'111',
        name:"aaa",
        isEdit:true,
        status:0
    }
    const wrapper=shallow(
        <ListWrap list={list}/>
    )
    expect(wrapper).toMatchSnapshot();
})