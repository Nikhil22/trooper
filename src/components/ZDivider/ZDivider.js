import React from 'react';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../../core/mui';

class ZDivider extends React.Component {
  constructor(props = {
    margin: 30,
  }) {
    super();
    this.props = props;
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Divider style={this.props.style} />
      </MuiThemeProvider>
    );
  }
}

ZDivider.propTypes = {
  style: React.PropTypes.object,
};

export default ZDivider;
