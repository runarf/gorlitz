import React from "react";
import moment from "moment";
import {
  Calendar,
  momentLocalizer
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events, onSelectEvent }) => (
  <Calendar
    localizer={localizer}
    events={events}
    defaultDate={new Date()}
    defaultView="month"
    style={{ height: "100vh" }}
    onSelectEvent={onSelectEvent}
  />
);

export default MyCalendar;
