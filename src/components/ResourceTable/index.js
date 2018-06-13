import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import titlecase from '../../utils/titlecase';

const ResourceTable = ({ resource }) => (
  <div className="resource_container">
    <Table bordered hover>
      <tbody>
      {Object.entries(resource)
        .filter(([key, value]) => !Array.isArray(value))
        .map(([key, value]) => (
          <tr key={key}>
            <th scope="row">{titlecase(key)}</th>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

ResourceTable.propTypes = {
  /** Data to render, an object with keys that will be
   * titlecased for headers and values to be displayed. */
  resource: PropTypes.object,
};

export default ResourceTable;
