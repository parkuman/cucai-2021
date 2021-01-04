import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment-timezone";
import icsToJson from "ics-to-json";

moment.tz.setDefault("America/Toronto");

const eventDays = [];
let schedule = [];

function extractDays(schedule) {
  for (const event of schedule) {
    // extract the day from the the event date
    const day = moment(event.startDate).format("YYYY-MM-DD");
    // if that day is not included in the eventDays array, append it
    if (!eventDays.includes(day)) {
      eventDays.push(day);
    }
  }

  // sort the days based on earliest date -> earlier day
  eventDays.sort((a, b) => {
    return (
      moment(a, "YYYY-MM-DD").format("X") - moment(b, "YYYY-MM-DD").format("X")
    );
  });
}

class Schedule extends React.Component {
  state = {
    selectedDay: "",
  };

  changeDay(day) {
    console.log(day)

    this.setState({ day });
  }

  async componentDidMount() {
    const icsFile = await fetch("schedule.ics");
    const icsData = await icsFile.text();
    schedule = icsToJson(icsData);

    extractDays(schedule);
    console.log(eventDays[0]);

    this.changeDay(eventDays[0]);

    console.log(schedule);
  }

  render() {
    const eventsOnDay = schedule.filter(
      (event) =>
        moment(event.startDate).format("YYYY-MM-DD") === this.state.selectedDay
    );

    return (
      <div>
        <h1>schedule</h1>
        <div>
          <button onClick={() => this.changeDay(0)}>Day 1</button>
          <button onClick={() => this.changeDay(0)}>Day 2</button>
        </div>
        <table>
          <tr>
            <th>Start</th>
            <th>Event</th>
            <th>Location</th>
          </tr>
          {eventsOnDay.map((event, i) => (
            <tr>
              <td>
                {moment(event.startDate).format("h:mm\xa0A")}
                {event.endDate
                  ? ` - ${moment(event.endDate).format("h:mm\xa0A")}`
                  : ""}
              </td>
              <td>
                <div>
                  <b>{event.summary}</b>
                </div>
                <div>
                  <i>{event.description}</i>
                </div>
              </td>
              <td>{event.location}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Schedule;
