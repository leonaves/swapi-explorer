import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ResourceCard from '../ResourceCard';

const RootResource = (props) => <ResourceCard { ...props } />;

RootResource.propTypes = {
  ...ResourceCard.propTypes,
  /** Endpoint to fetch when the resource is selected. */
  endpoint: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch, { endpoint }) => ({
  onSelect: () => dispatch({
    type: 'FETCH_DATA',
    payload: { endpoint },
  })
});

export default connect(
  undefined,
  mapDispatchToProps
)(RootResource);
