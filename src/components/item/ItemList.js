import React, {PropTypes} from 'react';
import ItemListRow from './ItemListRow';

const ItemList = ({items, actions}) => {
  return (
    <div className="col-md-12" style={{marginTop: 60+'px'}}>
      {items.map(item =>
        <ItemListRow key={item.Reference} item={item} actions={actions}/>
      )}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default ItemList;
