import ListItems from '../ListItems';
import React from 'react';
import { shallow } from 'enzyme';

test('render listItems component', () => {

    const list ={
        _id:'111',
        name:"aaa",
        isEdit:true,
        status:0
    }

    const wrapper = shallow(
        <ListItems list={list} key={list._id} />
    )
    expect(wrapper).toMatchSnapshot();
})