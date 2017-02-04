/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ZNavigationIn.css';
import Link from '../Link';


class ZNavigationIn extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={cx(s.root, this.props.className)} role="ZNavigation">
        <Link className={s.link} to="/settings">Settings</Link>
        <Link className={s.link} to="/logout">Log out</Link>
      </div>
    );
  }
}

export default withStyles(s)(ZNavigationIn);
