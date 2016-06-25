import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';
import {ItemsPage}  from './ItemsPage';
import {Page} from '../common/Page';
import {ManageItemPage} from './ManageItemPage';



export class MainContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      view: props.view
    };
    this.numbers = ["Home","Page 1","Page 2","Page 3","Page 4","Page 5"];
    this.clickPageHeader = this.clickPageHeader.bind(this);
  }
  clickPageHeader(event) {
    //event.preventDefault();

    //this.setState({view: 0});
    if(event !== undefined){
      this.props.actions.loadItems(event)
        //.then(() => this.redirect())
        .catch(error => {
          throw error;
        });
      //alert(event);
    }
    console.log(event);
  }


  render() {
    debugger;
    switch (this.props.view) {
      case 0:
        return (
          <div>
            <div className="navbar navbar-inverse navbar-fixed-top">
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  {this.numbers.map(function(number, i) {
                    let boundClick = this.clickPageHeader.bind(this, i);
                    return (
                      <Page key={i} onClick={boundClick} id={i} title={number}  />
                    );
                  }, this)}
                </ul>
              </div>
            </div>
            <ItemsPage
              items={this.props.items}
              actions={this.props.actions}
              params={this.props.params}
              page={this.props.page}
            />
          </div>
        );
      case 1:
        return (
          <ManageItemPage
            item={this.props.item}
            actions={this.props.actions}
            params={this.props.params}
          />
        );
      default:
        return (
          <ItemsPage
            items={this.props.items}
            actions={this.props.actions}
            params={this.props.params}
            page={this.props.page}
          />
        );
    }

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
  page: React.PropTypes.number.isRequired,
  item: React.PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired
};

function getPageItems(state, page) {
  return state.items.items.filter(item => item.pageId == page);
}


function mapStateToProps(state, ownProps) {
  debugger;
  let pageId = ownProps.params.id; // from the path `/page/:id`
  if(pageId === undefined || pageId === null){
    pageId = state.items.page;
    if(pageId === undefined || pageId === null){
      pageId = 0;
    }

  }
  let items = [];
  if (pageId >= 0) {
    let tmp_items = getPageItems(state, pageId);
    if(tmp_items !== undefined && tmp_items !== null && tmp_items.length > 0){
      items = tmp_items;
    }
  }

  return {view:state.items.view,
    items: items,
    item: state.items.item,
    page: state.items.page
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
