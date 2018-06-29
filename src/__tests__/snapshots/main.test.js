import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { Main } from '../../components/main';

configure({ adapter: new Adapter() });

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
  fetchCategories: jest.fn,
  fetchFact: jest.fn,
};

it('Renders correctly when not fetching', () => {
  const component = shallow(<Main {...props} />);
  expect(toJson(component)).toMatchSnapshot();
});

it('Renders correctly when fetching', () => {
  const component = shallow(
    <Main
      {...Object.assign({}, props, {
        categories: {
          fetching: true,
          categories,
          error: null,
        },
      })}
    />,
  );
  expect(toJson(component)).toMatchSnapshot();
});

it('Renders correctly when there was an error fetching categories', () => {
  const { categories: cats } = props;
  const component = shallow(
    <Main
      {...Object.assign({}, props, {
        categories: {
          ...cats,
          error: 'Error Fetching Categories!',
        },
      })}
    />,
  );
  expect(toJson(component)).toMatchSnapshot();
});
