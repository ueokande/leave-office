import React from "react";
import { List } from "material-ui/List";
import TimetableItem from "./timetable-item";

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
             return (
               <TimetableItem
                 key={entry.key}
                 arrivalTime={entry.arrivalTime}
                 departureTime={entry.departureTime}
               />
             );
           })
        }
      </List>
    );
  }
}
