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
             const text = entry.arrivalTime.getHours() + ":" +
                     entry.arrivalTime.getMinutes() + " - " +
                     entry.departureTime.getHours() + ":" +
                     entry.departureTime.getMinutes();

             return (
               <ListItem key={entry.key} primaryText={text} />
             );
           })
        }
      </List>
    );
  }
}
