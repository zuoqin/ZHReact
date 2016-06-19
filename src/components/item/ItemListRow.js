import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ItemListRow = ({item}) => {
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">
          <a href={"/item/" + item.Reference}>
            <div dangerouslySetInnerHTML={{__html: item.Title}}>
            </div>
          </a>
        </h3>
      </div>
      <div className="panel-body">
        <div dangerouslySetInnerHTML={{__html: item.Introduction}}>
        </div>
        <div dangerouslySetInnerHTML={{__html: item.Published}}>
        </div>
      </div>
    </div>
  );
};

ItemListRow.propTypes = {
  item: PropTypes.object.isRequired
};

export default ItemListRow;
