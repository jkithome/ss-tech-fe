import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import CategoryItem from '../../components/categoryItem';

configure({ adapter: new Adapter() });

const props = {
  category: 'science',
  cat: 'science',
  open: true,
  fetching: true,
  value: `Nothing can escape the gravity of a black hole, except for Chuck Norris. 
  Chuck Norris eats black holes. They taste like chicken.`,
  fetchfact: jest.fn(),
  factError: null,
};

it('Renders correctly when not open', () => {
  const component = renderer.create(
    <CategoryItem {...Object.assign({}, props, { open: false })} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly when not fetching, is selected category and open', () => {
  const component = renderer.create(
    <CategoryItem {...Object.assign({}, props, { fetching: false })} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly when there was an error fetching fact', () => {
  const component = shallow(
    <CategoryItem
      {...Object.assign({}, props, {
        fetching: false,
        factError: 'Error Fetching Fact!',
      })}
    />,
  );
  expect(toJson(component)).toMatchSnapshot();
});

it('Renders correctly when fetching, is selected category and open', () => {
  const component = renderer.create(<CategoryItem {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly when fetching and not selected category', () => {
  const component = renderer.create(
    <CategoryItem {...Object.assign({}, props, { cat: 'dev' })} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
