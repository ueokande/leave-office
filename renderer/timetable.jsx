import React from "react";
import { List, ListItem } from "material-ui/List";

export default class Timetable extends React.Component {

  constructor() {
    super();
    this.state = { entries: []};
  }

  render() {
    return (
      <List>
        {
           this.state.entries.map((entry) => {
             const text = entry.arrival_time.getHours() + ":" +
                     entry.arrival_time.getMinutes() + " - " +
                     entry.departure_time.getHours() + ":" +
                     entry.departure_time.getMinutes();

             return (
               <ListItem key={entry.key} primaryText={text} />
             );
           })
        }
      </List>
    );
  }
}
