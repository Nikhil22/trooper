import React, { PropTypes } from 'react';
import ZDatePicker from '../ZDatePicker';
import initializeArr from '../../core/initializeDS';
import s from './ZDatePickers.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../../core/mui';
import RaisedButton from 'material-ui/RaisedButton';

class ZDatePickers extends React.Component {
  constructor(props) {
    super();
    this.state = {
      pickers: initializeArr(props.numDatePickers || 3).map((el, idx) => {
        return <ZDatePicker key={idx} />;
      })
    }
  }

  addPicker() {
    this.setState({
      pickers: [...this.state.pickers, <ZDatePicker />]
    })
  }

  render() {
    return (
      <div>
        <div className={s.pickers}>
          {this.state.pickers}
        </div>

        <MuiThemeProvider muiTheme={muiTheme}>
          <RaisedButton label="Add another" primary={true} onClick={this.addPicker.bind(this)}/>
        </MuiThemeProvider>
      </div>
    )
  }
}

ZDatePickers.propTypes = {
    numDatePickers: React.PropTypes.number
};

export default ZDatePickers;
