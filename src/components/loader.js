import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Segment, Grid, Progress } from 'semantic-ui-react';

function Loading({ fetching }) {
  const text = `Click on any one of the categories listed to display a 
  random joke from the category.`;
  return (
    <Fragment>
      {fetching ? (
        <Grid className="container" centered>
          <Grid.Column columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Progress percent={100} indicating />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment textAlign="center" color="blue" size="massive">
                  Fetching Categories...
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      ) : (
        <Grid className="container" centered>
          <Grid.Column columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Segment raised tertiary textAlign="center">
                  {text}
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      )}
    </Fragment>
  );
}

Loading.propTypes = {
  fetching: PropTypes.bool.isRequired,
};

export default Loading;
