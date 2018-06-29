import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Message } from 'semantic-ui-react';

function ErrorDisplay({ header, text }) {
  return (
    <Grid.Row>
      <Grid.Column>
        <Message negative className="jokemessage">
          <Message.Header>{header}</Message.Header>
          <p>{text}</p>
        </Message>
      </Grid.Column>
    </Grid.Row>
  );
}

ErrorDisplay.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ErrorDisplay;
