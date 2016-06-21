import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';
import ItemList from './ItemList';
import {browserHistory} from 'react-router';


class ItemsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    debugger;
    this.redirectToAddItemPage = this.redirectToAddItemPage.bind(this);
    this.props.actions.loadItems(1);
    //this.getPageItems = this.getPageItems.bind(this);
  }

  itemRow(item, index) {
    return <div key={index}>{item.Title}</div>;
  }

  redirectToAddItemPage() {
    browserHistory.push('/item');
  }

  render() {
    const {items} = this.props;

    return (
      <div className="container top-padding-med">
        <ItemList items={items}/>
      </div>
    );
  }



}

ItemsPage.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//function mapStateToProps(state, ownProps) {
//  return {
//    items: state.items
//  };
//}
function getPageItems(state, page) {
  //this.props.actions.loadItems(page)
  //  .then(() => this.redirect())
  //  .catch(error => {
  //    console.log(error.description);
  //  });
}

// state references Redux store
function mapStateToProps(state, ownProps) {
  let pageId = ownProps.params.id; // from the path `/page/:id`
  if(pageId === undefined || pageId === null){
    pageId = 0;
  }
  let items = [];
  if (pageId > 0) {
    debugger
    let tmp_items = getPageItems(state, pageId);
    if(tmp_items !== undefined && tmp_items !== null && tmp_items.length > 0){
      items = tmp_items;
    }
  }

  return {
    items: state.items
  };
}
// Manually wrap (see comments below)
// keeps the calling code shorter
// at the cost of some extra code in mapDispatchToProps:
//function mapDispatchToProps(dispatch) {
//  return {
//    loadItems: (page) => {
//      dispatch(loadItems(page));
//    }
//  };
//}
// then in the component:
// this.props.loadItems(page);
// Manual wrap is very clear option, but quit redundant


// Use bindActionCreators to
// wrap action creators in dispatch call
// it is easy to pass to child component:
// child components are unaware of Redux,
// they can only call actions passed down as props.
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}
// later use:
// this.props.actions.loadItems(page);
// in component to call


// mapDispatchToProps = What actions do I want on props?
//       3 ways to handle mapDispatchToProps:
// 1. this.props.dispatch(loadItems())   --- Ignore it. Use dispatch
//    Two downsides:
//    1. Boilerplate
//    2. Redux concerns in child components
// 2. Manually wrap (see above);
// 3. Use bindActionCreators (see above)
export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);

// can use alternative:
// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(ItemsPage);
// as taking result of one function and passing it to another function:
// Functional programming
