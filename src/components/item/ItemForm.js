import React from 'react';

const ItemForm = ({item}) => {
  return (
    <div className="container top-padding-med" style={{marginTop: 53 +'px'}}>
      <div className="panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title" dangerouslySetInnerHTML={{__html: item.Title}}>
          </h3>
        </div>
        <div className="panel-body" dangerouslySetInnerHTML={{__html: item.Body}}>
        </div>
      </div>
    </div>
  );
};

ItemForm.propTypes = {
  item: React.PropTypes.object.isRequired,
  saving: React.PropTypes.bool
};

export default ItemForm;
