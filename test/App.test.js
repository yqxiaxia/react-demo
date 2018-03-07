import React from 'react';
import App from '../src/components/App';
import {expect} from 'chai';
import {shallow} from 'enzyme';

describe('test in frontend', () => {
  it('call component shallow', () => {
    const demo = shallow(<App/>);
    expect(demo.find('p').text()).to.equal('To get started');
  });
});
