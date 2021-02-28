import ChooseComponent from '../ChooseComponent';
import React from 'react';
import {shallow} from 'enzyme';

test('render choose component',()=>{
    const wrapper=shallow(
        <ChooseComponent/>
    )
    expect(wrapper).toMatchSnapshot();
})