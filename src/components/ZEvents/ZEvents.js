import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { fullWhite } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import fetch from '../../core/fetch';
import muiTheme from '../../core/mui';
import ZIf from '../ZIf';
import isArray from '../../core/isArray';
import ZToast from '../ZToast';

const deleteButtonStyle = {
  margin: 12,
};

class ZEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedHeader: true,
      fixedFooter: false,
      stripedRows: true,
      showRowHover: false,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: false,
      showCheckboxes: true,
      events: [],
      isSomethingSelected: false,
      rowIndicesSelected: [],
      isToastVisible: false,
      toastMessage: '',
    };
    this.queryEvents();
  }

  onToastClose() {
    this.setState({
      isToastVisible: false,
      toastMessage: '',
    });
  }

  onRowSelection(rowsSelected) {
    if (rowsSelected === 'all' || (isArray(rowsSelected) && rowsSelected.length)) {
      return this.setState({
        rowIndicesSelected: rowsSelected,
        isSomethingSelected: true,
      });
    }

    return this.setState({
      rowIndicesSelected: [],
      isSomethingSelected: false,
    });
  }

  async deleteEvents() {
    let ids;

    if (this.state.rowIndicesSelected === 'all') {
      ids = this.state.events.map(event => {
        return event.id;
      });
    } else {
      ids = this.state.events.reduce((acc, event, idx) => {
        if (this.state.rowIndicesSelected.indexOf(idx) !== -1) {
          acc.push(event.id);
        }
        return acc;
      }, []);
    }

    const mutation = `mutation DUE($ids: [String!]) {
      deleteUserEvent(
        ids: $ids
      ) {
        clientEmail
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
          ids,
        },
      }),
      credentials: 'include',
    });

    const { data } = await response.json();

    if (data && data.deleteUserEvent) {
      this.setState({
        isToastVisible: true,
        toastMessage: 'Event(s) successfully deleted!',
        events: this.state.events.filter(event => {
          return ids.indexOf(event.id) === -1;
        }),
        rowIndicesSelected: [],
        isSomethingSelected: false,
      });
    } else {
      this.setState({
        isToastVisible: true,
        toastMessage: 'There was an error when trying to delete your event(s)',
      });
    }
  }

  async queryEvents() {
    const query = `{
      events{
        id,
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
        query,
      }),
      credentials: 'include',
    });

    const { data } = await response.json();
    if (data && data.events) {
      this.setState({
        events: data.events,
      });
    }
  }
  render() {
    const events = this.state.events.map((event, idx) => {
      return (
        <TableRow key={event.id} selected={this.state.rowIndicesSelected.indexOf(idx) !== -1}>
          <TableRowColumn>{event.clientEmail}</TableRowColumn>
          <TableRowColumn>{event.endDate}</TableRowColumn>
        </TableRow>
      );
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <ZIf show={this.state.isSomethingSelected}>
            <RaisedButton
              style={deleteButtonStyle}
              onClick={this.deleteEvents.bind(this)}
              secondary
              icon={<ActionDelete color={fullWhite} />}
            />
          </ZIf>

          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
            onRowSelection={this.onRowSelection.bind(this)}
          >
            <TableHeader
              displaySelectAll={this.state.showCheckboxes}
              adjustForCheckbox={this.state.showCheckboxes}
              enableSelectAll={this.state.enableSelectAll}
            >
              <TableRow>
                <TableHeaderColumn tooltip="Client email">
                  Client email
                </TableHeaderColumn>
                <TableHeaderColumn tooltip="End date of service to client">
                  End date of service to client
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}
            >
              {events}
            </TableBody>
          </Table>
          <ZToast
            open={this.state.isToastVisible}
            message={this.state.toastMessage}
            onClose={this.onToastClose.bind(this)}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default ZEvents;
