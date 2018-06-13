import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'reactstrap';

import titlecase from '../../utils/titlecase';
import './styles.css';

const PaginatedList = ({ data, onPrevious = false, onNext = false }) => (
  <div className="paginated_container">
    <div className="paginated_table">
      <Table bordered>
        <thead>
          <tr>
            {Object.keys(data[0])
              .filter(key => !Array.isArray(data[0][key]))
              .map(key => (
                <th key={key}>{titlecase(key)}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={Object.values(row)[0]}>
              {Object.keys(row)
                .filter(key => !Array.isArray(row[key]))
                .map(key => <td key={key + row[key]}>{row[key]}</td>)
              }
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    { onPrevious && <Button className="col-2" onClick={onPrevious}>Previous Page</Button> }
    { onNext &&
      <Button className={ `col-2 offset-${ onPrevious ? 8 : 10 }` } onClick={onNext}>
        Next Page
      </Button>
    }
  </div>
);

PaginatedList.propTypes = {
  /** Data to render, an array of objects with keys that will be
   * titlecased for headers and values to be displayed. */
  data: PropTypes.array,
  /** Function to be executed when the "previous page" button is clicked.
   * If not passed, button isn't rendered. */
  onPrevious: PropTypes.func,
  /** Function to be executed when the "next page" button is clicked.
   * If not passed, button isn't rendered. */
  onNext: PropTypes.func,
};

export default PaginatedList;
