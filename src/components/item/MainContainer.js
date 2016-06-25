import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';
import * as ManageItemPage from './ManageItemPage';
import {ItemsPage}  from './ItemsPage';
import {PagePic, PageLink} from './TestComponent';

export class MainContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    debugger;
    this.state = {
      view: props.view
    };

    //this.props.actions.loadItems(props.params.id);
  }

  render() {

     return (
     <ItemsPage
       items= {this.props.items}
       actions= {this.props.actions}
       params = {this.props.params}
     />
     );
    /*
    return (
      <div>
        <PagePic pagename={this.props.pagename}/>
        <PageLink pagename={this.props.pagename}/>
      </div>
    );
    */
  }
}



MainContainer.propTypes = {
  view: React.PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  debugger;
  return {view:state.items.view,
    items: state.items.items
  };
}


function mapDispatchToProps(dispatch) {
  debugger;
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
