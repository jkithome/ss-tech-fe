import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CategoryItem from '../../components/categoryItem';

configure({ adapter: new Adapter() });

const fetchfact = jest.fn();

const props = {
  category: 'science',
  cat: 'science',
  open: true,
  fetching: true,
  value: '',
  fetchfact,
};

it('Clicking on category calls fetchFact', () => {
  const wrapper = mount(<CategoryItem {...props} />);
  wrapper.find('div.ui.blue.center.aligned.segment').simulate('click');
  expect(fetchfact).toBeCalled();
});
