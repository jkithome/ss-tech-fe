import React from 'react';
import renderer from 'react-test-renderer';
import ErrorDisplay from '../../components/errorDisplay';

it('Renders correctly', () => {
  const component = renderer.create(
    <ErrorDisplay
      header="Error Fetching Fact!"
      text="There was an error fetching the fact. Please try again"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
