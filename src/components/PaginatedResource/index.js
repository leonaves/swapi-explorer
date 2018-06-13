import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PaginatedList from '../PaginatedList';

const PaginatedResource = (props) => <PaginatedList { ...props } />;

PaginatedResource.propTypes = {
  /** Data to in the shape of a paginated resource. */
  data: PropTypes.array,
};

const mapDispatchToProps = (dispatch, { data }) => {
  const fetchDataDispatcher = (endpoint) =>
    () => dispatch({
      type: 'FETCH_DATA',
      payload: { endpoint },
    });

  return ({
    onPrevious: data.previous && fetchDataDispatcher(data.previous),
    onNext: data.next && fetchDataDispatcher(data.next),
    data: data.results,
  });
};

export default connect(
  undefined,
  mapDispatchToProps
)(PaginatedResource);
