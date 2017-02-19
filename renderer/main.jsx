import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Timetable from "./timetable";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

export default class Main extends React.Component {

  componentDidMount() {
    this.timetable.setState({
      entries: [{
        key: 1,
        arrivalTime: new Date("2017-02-18T21:25"),
        departureTime: new Date("2017-02-18T21:36")
      }, {
        key: 2,
        arrivalTime: new Date("2017-02-18T21:31"),
        departureTime: new Date("2017-02-18T21:42")
      }, {
        key: 3,
        arrivalTime: new Date("2017-02-18T21:37"),
        departureTime: new Date("2017-02-18T21:48")
      }]
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <Timetable ref={(c) => { this.timetable = c; }} />
      </MuiThemeProvider>
    );
  }
}
