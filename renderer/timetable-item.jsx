import React from "react";
import { ListItem } from "material-ui/List";

export default function TimetableItem(props) {
  const from = props.arrivalTime,
    to = props.departureTime,
    text = `${from.getHours()}:${from.getMinutes()} - ` +
           `${to.getHours()}:${to.getMinutes()}`;
  return <ListItem primaryText={text} />;
}


TimetableItem.propTypes = {
  arrivalTime: React.PropTypes.instanceOf(Date).isRequired,
  departureTime: React.PropTypes.instanceOf(Date).isRequired
};
