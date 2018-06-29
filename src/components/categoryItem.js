import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Grid, Message, Icon } from 'semantic-ui-react';
import ErrorDisplay from './errorDisplay';

function CategoryItem({
  category,
  cat,
  open,
  fetching,
  value,
  fetchfact,
  factError,
}) {
  let panel;
  if (category === cat && open) {
    if (fetching) {
      panel = (
        <Grid.Row>
          <Grid.Column className="jokemessage">
            <Message>
              <Icon name="circle notched" loading />
              <Message.Content>
                <Message.Header>Just one second</Message.Header>
                We are fetching that joke for you.
              </Message.Content>
            </Message>
          </Grid.Column>
        </Grid.Row>
      );
    } else if (factError) {
      panel = (
        <ErrorDisplay
          header={factError}
          text="There was an error fetching the fact. Please try again"
        />
      );
    } else {
      panel = (
        <Grid.Row>
          <Grid.Column>
            <Message
              className="jokemessage"
              header={`${cat.charAt(0).toUpperCase() +
                cat.substr(1)} Chuck Norris Fact`}
              content={value}
            />
          </Grid.Column>
        </Grid.Row>
      );
    }
  } else {
    panel = null;
  }

  return (
    <Grid className="container">
      <Grid.Column columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Segment
              color="blue"
              textAlign="center"
              onClick={() => {
                fetchfact(cat);
              }}
            >
              {cat}
            </Segment>
          </Grid.Column>
        </Grid.Row>
        {panel}
      </Grid.Column>
    </Grid>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  cat: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  value: PropTypes.string,
  fetchfact: PropTypes.func.isRequired,
  factError: PropTypes.string,
};

export default CategoryItem;
