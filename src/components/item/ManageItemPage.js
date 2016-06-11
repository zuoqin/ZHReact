import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';
import ItemForm from './ItemForm';
import {topicsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageItemPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      item: Object.assign({}, props.item),
      errors: {},
      saving: false
    };

    this.updateItemState = this.updateItemState.bind(this);
    this.saveItem = this.saveItem.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.item.id != nextProps.item.id) {
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


  saveItem(event) {
    event.preventDefault();

    if (!this.itemFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.saveItem(this.state.item)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Item saved');
    this.context.router.push('/items');
  }

  render() {
    return (
      <ItemForm
        allTopics={this.props.topics}
        onChange={this.updateItemState}
        onSave={this.saveItem}
        item={this.state.item}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageItemPage.propTypes = {
  item: PropTypes.object.isRequired,
  topics: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageItemPage.contextTypes = {
  router: PropTypes.object
};

function getItemById(items, id) {
  const item = items.filter(item => item.id == id);
  if (item) return item[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const itemId = ownProps.params.id; // from the path `/item/:id`

  let item = {Title: '', reference: '', Updated: '', Introduction: '', Body: ''};

  if (itemId && state.items.length > 0) {
    item = getItemById(state.items, itemId);
  }

  return {
    item: item,
    topics: topicsFormattedForDropdown(state.topics)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageItemPage);
