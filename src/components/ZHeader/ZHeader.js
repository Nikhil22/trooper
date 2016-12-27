/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ZHeader.css';
import Link from '../Link';
import ZNavigationIn from '../ZNavigationIn';
import ZNavigationOut from '../ZNavigationOut';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

class ZHeader extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    let nav = null;

    if (!this.props.plain) {
      nav = this.props.in ?
            <ZNavigationIn className={s.nav} />
            : <ZNavigationOut className={s.nav} />
    }
    
    return (
      <div className={s.root}>
        <div className={s.container}>
          {nav}
          <div className={s.brand}>
          {/*<Link className={s.brand} to="/">*/}
            {/*<img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="38" height="38" alt="React" />*/}
            <span className={s.brandTxt}>Trooper</span>
          </div>
          {/*<div className={s.banner}>
            <h1 className={s.bannerTitle}>React</h1>
            <p className={s.bannerDesc}>Complex web apps made easy</p>
          </div>*/}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ZHeader);
