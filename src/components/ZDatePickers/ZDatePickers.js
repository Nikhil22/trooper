import React, { PropTypes } from 'react';
import ZDatePicker from '../ZDatePicker';
import initializeArr from '../../core/initializeDS';
import s from './ZDatePickers.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../../core/mui';
import RaisedButton from 'material-ui/RaisedButton';
import ZDivider from '../ZDivider';
// import syncGoogle from '../../core/google-calendar/sync';

const buttonAddPickerStyle = {
  marginTop: 30,
};

const dividerStyle = {
  marginTop: 30,
};

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

  syncGoogleCalendar() {
    // Now we can run a script and invoke a callback when complete, e.g.
    // const sync = require('../../core/google-calendar/sync');
    // sync.readFile();
  }

  render() {
    return (
      <div>
        <div className={s.pickers}>
          {this.state.pickers}
        </div>

        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <RaisedButton
              label="Add another"
              style={buttonAddPickerStyle}
              primary={true}
              onClick={this.addPicker.bind(this)}
            />
            <ZDivider style={dividerStyle} />
            <h3>Have your events on Google Calendar?</h3>
            <RaisedButton
              label="Sync"
              secondary={true}
              onClick={this.syncGoogleCalendar}
            />
          </div>
        </MuiThemeProvider>

      </div>
    )
  }
}

ZDatePickers.propTypes = {
  numDatePickers: React.PropTypes.number
};

export default ZDatePickers;
