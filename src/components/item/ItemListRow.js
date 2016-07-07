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
    this.getHash = this.getHash.bind(this);
    this.keepLocation = this.keepLocation.bind(this);
  }

  clickReference(event) {
    //event.preventDefault();

    //this.setState({view: 1});
    //if(1==0){
      this.props.actions.loadItem(this.state.item.Reference)
        //.then(() => this.redirect())
        .catch(error => {
          throw error;
        });

    //}
    //alert(event);
    console.log(this.state.item.Reference);
    this.keepLocation(window.pageYOffset);
    return false;
  }

  keepLocation(oldOffset) {
    //var window.st = 0;
    if (window.pageYOffset!= null){
      window.st=oldOffset;
    }
    if (document.body.scrollWidth!= null){
      window.st=oldOffset;
    }
    setTimeout('window.scrollTo(0,window.st)',10);
  }

  getHash(source) {
    var hash = 0, i, chr, len;
    if (source.length === 0) return hash;
    for (i = 0, len = source.length; i < len; i++) {
      chr   = source.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  render (){
    return (
      <div className="selector1" id={this.getHash(this.state.item.Reference)}>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <a href={"#"+this.getHash(this.state.item.Reference)} onClick={this.clickReference}>
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

      </div>

    );
  }
}

ItemListRow.propTypes = {
  item: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default ItemListRow;
