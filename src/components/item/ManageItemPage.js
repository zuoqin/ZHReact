import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';
import ItemForm from './ItemForm';
import toastr from 'toastr';

export class ManageItemPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      item: Object.assign({}, props.item),
      errors: {}
    };

    this.props.actions.loadItem(props.item.Reference);
    this.updateItemState = this.updateItemState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.item.Reference != nextProps.item.Reference) {
      // Necessary to populate form when existing item is loaded directly.
      this.setState({item: Object.assign({}, nextProps.item)});
    }
  }

  updateItemState(event) {
    const field = event.target.name;
    let item = this.state.item;
    item[field] = event.target.value;
    return this.setState({item: item});
  }

  itemFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.item.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }



  //redirect() {
  //  this.context.router.push('/items');
  //}

  render() {
    return (
      <ItemForm
        item={this.state.item}
      />
    );
  }
}

ManageItemPage.propTypes = {
  item: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageItemPage.contextTypes = {
  router: PropTypes.object
};

function getItemById(items, reference) {
  const item = items.filter(item => item.Reference == reference);
  if (item) return item[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const itemId = ownProps.params.id; // from the path `/item/:id`

  let item = {Title: '', Reference: '', Updated: '', Introduction: '', Body: ''};

  if (itemId && state.items.length > 0) {
    item = getItemById(state.items, itemId);
  }

  return {
    item: item
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageItemPage);
