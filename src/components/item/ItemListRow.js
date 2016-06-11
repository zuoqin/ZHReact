import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ItemListRow = ({item}) => {
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">
          <a href={item.Reference}>
            <div>
              {item.Title}
            </div>
          </a>
        </h3>
      </div>
      <div className="panel-body">
        <div>
          {item.Introduction}
        </div>
        <div>
          {item.Published}
        </div>
      </div>
    </div>
  );
};

ItemListRow.propTypes = {
  item: PropTypes.object.isRequired
};

export default ItemListRow;
