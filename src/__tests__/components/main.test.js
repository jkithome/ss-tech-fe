import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Main } from '../../components/main';

configure({ adapter: new Adapter() });

const fetchCategories = jest.fn();
const fetchFact = jest.fn();

const fact = {
  category: ['science'],
  icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
  id: 'uojt-t8as5ws5h1q-sjslw',
  url: 'https://api.chucknorris.io/jokes/uojt-t8as5ws5h1q-sjslw',
  value: `Nothing can escape the gravity of a black hole, except for Chuck Norris. 
  Chuck Norris eats black holes. They taste like chicken.`,
};

const categories = [
  'explicit',
  'dev',
  'movie',
  'food',
  'celebrity',
  'science',
  'sport',
  'political',
  'religion',
  'animal',
  'history',
  'music',
  'travel',
  'career',
  'money',
  'fashion',
];

const catergoriesURL = 'https://api.chucknorris.io/jokes/categories';
const factURL = `https://api.chucknorris.io/jokes/random?category=${
  categories[1]
}`;

const props = {
  categories: {
    fetching: false,
    categories,
    error: null,
  },
  facts: {
    fetching: false,
    fact,
    error: null,
  },
  fetchCategories,
  fetchFact,
};

it('Calls fetchCategories on mount', () => {
  mount(<Main {...props} />);
  expect(fetchCategories).toBeCalled();
  expect(fetchCategories).toHaveBeenLastCalledWith(catergoriesURL);
});

it('Clicking on category calls fetchFact', () => {
  const wrapper = mount(<Main {...props} />);
  wrapper
    .find('div.ui.blue.center.aligned.segment')
    .at(1)
    .simulate('click');
  expect(fetchFact).toBeCalled();
  expect(fetchFact).toHaveBeenLastCalledWith(factURL);
});
