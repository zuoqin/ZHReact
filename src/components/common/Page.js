/**
 * Created by alexey on 6/25/2016.
 */

import React, {PropTypes} from 'react';



export var Page = React.createClass({
  render: function() {
    return (
      <li>
        <a id={"Page"+this.props.id} href="#" onClick={this.props.onClick}>{this.props.title}</a>
      </li>
    );
  }
});

Page.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

