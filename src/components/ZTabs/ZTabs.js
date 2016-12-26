import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ZTabs.css';
import ZDatePickers from '../ZDatePickers';

class ZTabs extends Component {
  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  render() {
    return (
      <div>
        <Tabs
          onSelect={this.handleSelect}
          selectedIndex={0}
        >

          <TabList>

            <Tab>Add Events</Tab>
            <Tab>Upcoming Events</Tab>
            <Tab>Reviews</Tab>
          </TabList>

          <TabPanel>
            <ZDatePickers numDatePickers={3}></ZDatePickers>
          </TabPanel>
          <TabPanel>
            <h2>You have no upcoming events</h2>
          </TabPanel>
          <TabPanel>
            <h2>You have no reviews yet</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default withStyles(s)(ZTabs);
