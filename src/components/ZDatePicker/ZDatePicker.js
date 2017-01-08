import withStyles from 'isomorphic-style-loader/lib/withStyles';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import s from './ZDatePicker.css';
import muiTheme from '../../core/mui';
import fetch from '../../core/fetch';
import ZToast from '../ZToast';

// const DatePicker = require('react-datepicker');
const moment = require('moment');

const ZDatePicker = React.createClass({
  getInitialState: function() {
    return {
      endDate: new Date(),
      clientEmail: '',
      isToastVisible: false,
      toastMessage: '',
    };
  },

  handleDateChange: function(date) {
    this.setState({
      endDate: date,
    });
  },

  handleEmailChange: function(event) {
    this.setState({
      clientEmail: event.target.value,
    });
  },

  determineAddBtnDisability: function() {
    return !this.state.endDate || !this.state.clientEmail || !this.validateEmail();
  },

  validateEmail: function() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.state.clientEmail);
  },

  didUserEnterInvalidEmail: function() {
    return this.state.clientEmail.length && !this.validateEmail();
  },

  onToastClose: function() {
    this.setState({
      isToastVisible: false,
      toastMessage: ''
    })
  },

  addEvent: async function() {
    const mutation = `mutation CUE($endDate: String!, $clientEmail: String!) {
      createUserEvent(
        endDate: $endDate,
        clientEmail: $clientEmail
      ) {
        clientEmail,
        endDate
      }
    }`;

    const response = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: mutation,
        variables: {
          endDate: this.state.endDate,
          clientEmail: this.state.clientEmail,
        }
      }),
      credentials: 'include',
    });

    const { data } = await response.json();

    if (data && data.createUserEvent) {
      this.setState({
        isToastVisible: true,
        toastMessage: 'Event successfully added!'
      })
    }else {
      this.setState({
        isToastVisible: true,
        toastMessage: 'There was an error when trying to add your event'
      })
    }
  },

  render: function() {
    return (
      <div className={s['react-datepicker_container']}>

        <div className={s['react-datepicker_inline_block']}>
          <MuiThemeProvider muiTheme={muiTheme}>
            <DatePicker
              hintText="Select an end-date"
              container="inline"
              onChange={this.handleDateChange}
              defaultDate={this.state.endDate}
            />
          </MuiThemeProvider>
        </div>
        <input
          type="email"
          className={this.didUserEnterInvalidEmail() ? s['react-datepicker_input__invalid'] : s['react-datepicker_input']}
          onChange={this.handleEmailChange}
          value={this.state.clientEmail}
          placeholder="Client email"
        />

        <button
          className={s['react-datepicker_add_button']}
          onClick={this.addEvent}
          disabled={this.determineAddBtnDisability()}>
          Add
        </button>

        <ZToast
          open={this.state.isToastVisible}
          message={this.state.toastMessage}
          onClose={this.onToastClose}
        />
      </div>
    );
  },
});

export default withStyles(s)(ZDatePicker);
