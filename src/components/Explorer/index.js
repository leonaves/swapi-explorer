import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Progress } from 'reactstrap';

import chunkedMap from '../../utils/chunked-map';
import RootResource from '../RootResource';
import PaginatedResource from '../PaginatedResource';
import ResourceTable from '../ResourceTable';

class Explorer extends React.PureComponent {
  fetchData(endpoint) {
    this.props.dispatch({
      type: 'FETCH_DATA',
      payload: { endpoint }
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { data } = this.props;

    if (!data) {
      return <Progress className="mt-5" animated color="info" value={100} />
    }

    if (data.count) {
      return <PaginatedResource data={data} />
    } else if (data.url) {
      return <ResourceTable resource={data} />
    } else {
      return chunkedMap(Object.entries(data), 3, ((row, index) => (
        <div key={index} className="row">
          {row.map(([name, endpoint]) => <RootResource key={name} name={name} endpoint={endpoint} />)}
        </div>
      )));
    }

    return null;
  }
}

Explorer.propTypes = {
  /** A render prop child to render the data into */
  children: PropTypes.func,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(Explorer);
