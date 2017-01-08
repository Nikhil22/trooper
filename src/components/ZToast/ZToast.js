import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../../core/mui';

export default class Toast extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Snackbar
          open={this.props.open}
          message={this.props.message}
          autoHideDuration={4000}
          onRequestClose={this.props.onClose}
        />
      </MuiThemeProvider>
    );
  }
}

Toast.propTypes = {
  message: React.PropTypes.string,
  open: React.PropTypes.bool,
  onClose: React.PropTypes.func,
};
