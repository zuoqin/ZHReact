import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <div></div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
