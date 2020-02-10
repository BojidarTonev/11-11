import React, { Component } from "react";
import events from "./events";
import * as BigCalnder from "react-big-calendar";
import { Calendar, Views } from "react-big-calendar";
import moment from "moment";
import * as dates from "../../../utils/dates";
import "./date-picker.css";

let allViews = Object.keys(Views).map(k => Views[k]);


const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue"
    }
  });

const localizer = BigCalnder.momentLocalizer(moment);

class DatePicker extends Component {
  constuctor(props) {
    this.state = {};
  }

  componentDidMount() {
    //Remove the unnesecery buttons
    console.log(Views)
    let buttons = document.getElementsByClassName("rbc-btn-group")[1].children;
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.display = "none";
    }
  }

  render() {
    return (
      <div className="date-picker">
        <Calendar
          events={events}
          views={allViews}
          step={60}
          showMultiDayTimes
          max={dates.add(
            dates.endOf(new Date(2015, 17, 1), "day"),
            -1,
            "hours"
          )}
          defaultDate={new Date()}
          components={{
            timeSlotWrapper: ColoredDateCellWrapper
          }}
          localizer={localizer}
        />
      </div>
    );
  }
}

export default DatePicker;
