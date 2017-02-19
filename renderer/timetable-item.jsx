import React from "react";
import { ListItem } from "material-ui/List";

export default class TimetableItem extends ListItem {
  render() {
    const from = this.props.arrivalTime,
      to = this.props.departureTime,
      text = `${from.getHours()}:${from.getMinutes()} - ` +
             `${to.getHours()}:${to.getMinutes()}`;
    return <ListItem primaryText={text} />;
  }
}

