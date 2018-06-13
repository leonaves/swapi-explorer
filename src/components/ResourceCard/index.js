import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle, Button } from 'reactstrap';

import titlecase from '../../utils/titlecase';

const ResourceCard = ({ name, onSelect }) => (
  <div className="col-4 mt-3">
    <Card>
      <CardBody>
        <CardTitle>{ titlecase(name) }</CardTitle>
        <Button onClick={onSelect}>See All</Button>
      </CardBody>
    </Card>
  </div>
);

ResourceCard.propTypes = {
  /** Name of the resource, will be titlecased on render. */
  name: PropTypes.string.isRequired,
  /** What to do when the resource is selected. */
  onSelect: PropTypes.func,
};

export default ResourceCard;
