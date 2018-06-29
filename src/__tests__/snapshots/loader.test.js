import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../../components/loader';

const fetching = true;

it('Renders correctly when fetching', () => {
  const component = renderer.create(<Loading fetching={fetching} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly when not fetching', () => {
  const component = renderer.create(<Loading fetching={false} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
