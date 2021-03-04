import ChooseComponent from '../ChooseComponent';
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme';

test('render choose component',()=>{
    const wrapper=shallow(
        <ChooseComponent 
        />
    )
    expect(wrapper).toMatchSnapshot();
})