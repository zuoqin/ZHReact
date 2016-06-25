import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import * as itemActions from '../../actions/itemActions';


export class ItemListRow extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      item: Object.assign({}, props.item)
    };

    this.clickReference = this.clickReference.bind(this);
  }

  clickReference(event) {
    //event.preventDefault();

    //this.setState({view: 1});

    this.props.actions.loadItem(this.state.item.Reference)
      //.then(() => this.redirect())
      .catch(error => {
        throw error;
      });
    //alert(event);
    console.log(this.state.item.Reference);
  }



  render (){
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">
            <a href="#" onClick={this.clickReference}>
              <div dangerouslySetInnerHTML={{__html: this.state.item.Title}}>
              </div>
            </a>
          </h3>
        </div>
        <div className="panel-body">
          <div dangerouslySetInnerHTML={{__html: this.state.item.Introduction}}>
          </div>
          <div dangerouslySetInnerHTML={{__html: this.state.item.Published}}>
          </div>
        </div>
      </div>

    );
  }
}

ItemListRow.propTypes = {
  item: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default ItemListRow;
