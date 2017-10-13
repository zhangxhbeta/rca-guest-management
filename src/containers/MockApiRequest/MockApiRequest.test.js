import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import MAR from './';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

// noinspection JSUnresolvedFunction
it('renders without crashing', () => {
  shallow(<MAR />);
});
