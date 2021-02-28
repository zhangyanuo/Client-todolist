import React from 'react';
React.useLayoutEffect = React.useEffect
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import jsdom from 'jsdom'
// import chaiEnzyme from 'chai-enzyme'
const url = 'http://localhost';
const { window } = new jsdom.JSDOM('<!doctype html><html><body></body></html>', { url })
import {shallow,render,mount} from 'enzyme';
 
global.window = window
global.document = window.document
global.localStorage = window.localStorage
global.navigator = window.navigator
global.Blob = window.Blob
global.location = window.location
global.shallow = shallow;
global.render = render;
global.mount = mount;
 
Enzyme.configure({ adapter: new Adapter() })