import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ZSettings.css';
import ZDivider from '../ZDivider';
import ZPersonalInfo from '../ZPersonalInfo';
import ZPricingTable from '../ZPricingTable';

const dividerStyle = {
    margin: 15
}

class ZSettings extends React.Component {
    constructor(props) {
        super();
    };

    render() {
        return (
            <div className={s.width}>
                <ZPersonalInfo {...this.props.personalInfo}/>
                <ZDivider style={dividerStyle}/>
                <ZPricingTable />
                <ZDivider style={dividerStyle}/>
            </div>
        );
    };
};

export default withStyles(s)(ZSettings);
