import React from 'react';


import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default class Timetable extends React.Component {

  constructor() {
    super();
    this.state = {
      entries: []
    }
  }

  render() {
    return (
      <List>
        {
           this.state.entries.map((d) => {
             let text = d.arrival_time.getHours() + ':'+ d.arrival_time.getMinutes() + ' - ' +
                        d.departure_time.getHours() + ':'+ d.departure_time.getMinutes();
             return (<ListItem key={d.key} primaryText={text} />)
           })
        }
      </List>
    )
  }
}
