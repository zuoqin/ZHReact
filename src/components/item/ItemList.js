import React, {PropTypes} from 'react';
import ItemListRow from './ItemListRow';

const ItemList = ({items}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Introduction</th>
        <th>Published</th>
        <th>Body</th>
      </tr>
      </thead>
      <tbody>
      {items.map(item =>
        <ItemListRow key={item.Reference} item={item}/>
      )}
      </tbody>
    </table>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemList;
