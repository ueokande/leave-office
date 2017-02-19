import React from "react";
import { List } from "material-ui/List";
import TimetableItem from "./timetable-item";

export default function Timetable(props) {
  return (
    <List>
      {
         props.entries.map((entry) => {
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

Timetable.propTypes = {
  entries: React.PropTypes.arrayOf(React.PropTypes.object)
};
Timetable.defaultProps = {
  entries: []
};

