import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header, Image } from 'semantic-ui-react';
import { fetchCategories } from '../actions/categories';
import { fetchFact } from '../actions/facts';
import CategoryItem from './categoryItem';
import Loader from './loader';
import ErrorDisplay from './errorDisplay';
import logo from '../images/logo.png';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      category: '',
    };
  }

  componentDidMount() {
    const { fetchCategories: fetchcategories } = this.props;
    fetchcategories('https://api.chucknorris.io/jokes/categories');
  }

  selectCategory = category => {
    const { fetchFact: fetchfact } = this.props;
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    fetchfact(url);
    this.setState({ open: true, category });
  };

  render() {
    const {
      categories: { categories, fetching, error: categoryError },
      facts: {
        fetching: getting,
        fact: { value },
        error: factError,
      },
    } = this.props;
    const { open, category } = this.state;

    return (
      <Fragment>
        <Header as="h3" textAlign="center" color="teal" block>
          Chuck Norris Facts
        </Header>
        <Image className="logo" src={logo} size="medium" centered />
        <Loader fetching={fetching} />
        {categoryError ? (
          <ErrorDisplay
            header={categoryError}
            text="There was an error fetching the categories. Please try again"
          />
        ) : (
          categories.map(cat => (
            <CategoryItem
              key={cat}
              category={category}
              cat={cat}
              open={open}
              fetching={getting}
              fetchfact={this.selectCategory}
              value={value}
              factError={factError}
            />
          ))
        )}
      </Fragment>
    );
  }
}

Main.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  fetchFact: PropTypes.func.isRequired,
  categories: PropTypes.shape({
    categories: PropTypes.array,
    fetching: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
  }).isRequired,
  facts: PropTypes.shape({
    fact: PropTypes.object,
    fetching: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
  }).isRequired,
};

function mapStateToProps({ categories, facts }) {
  return {
    categories,
    facts,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchCategories,
      fetchFact,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
