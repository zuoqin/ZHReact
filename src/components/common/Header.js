import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <div className="navbar navbar-inverse navbar-fixed-top">
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li>
            <a href="/page/0">Home</a>
          </li>
          <li>
            <a href="/page/1">Page 1</a>
          </li>
          <li>
            <a href="/page/2">Page 2</a>
          </li>
          <li>
            <a href="/page/3">Page 3</a>
          </li>
          <li>
            <a href="/page/4">Page 4</a>
          </li>
          <li>
            <a href="/page/5">Page 5</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
