import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import date from "date-and-time";
import ordinal from "date-and-time/plugin/ordinal";

import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../components/Layout";

import media from "../styles/media";
import theme from "../styles/theme";

date.plugin(ordinal); //add the ordinal plugin to the date pkg so we can have 1st, 2nd, 3rd, etc.

const events = [
  //////////////////////////////////// DAY 1 ///////////////////////////////////////////////
  {
    start: "2021/03/06 09:00",
    end: "2021/03/06 09:15",
    title: "Opening Ceremonies",
    subtitle: "Introducing CUCAI and what's in store for the weekend.",
    location: "Main Stage",
  },
  {
    start: "2021/03/06 09:15",
    end: "2021/03/06 09:55",
    title: "Speaker Presentation",
    subtitle: "Ron Bodkin - Applying AI Research",
    location: "Main Stage",
  },
  {
    start: "2021/03/06 10:00",
    end: "2021/03/06 10:40",
    title: "Speaker Presentation",
    subtitle: "Inmar Givoni - Journey Through The Past Decade of AI and ML Applications",
    location: "Main Stage",
  },
  {
    start: "2021/03/06 10:45",
    end: "2021/03/06 12:10",
    title: "Design Teams & Student Executive Team Showcase",
    subtitle: "",
    location: "Expo Booths",
  },
  {
    start: "2021/03/06 12:10",
    end: "2021/03/06 13:00",
    title: "Lunch Break",
    subtitle: "",
    location: "",
  },
  {
    start: "2021/03/06 13:00",
    end: "2021/03/06 13:40",
    title: "Workshop Sessions",
    subtitle: "Google Cloud, Distributed Compute Labs, bld.ai",
    location: "Sessions 1, 2, 3",
  },
  {
    start: "2021/03/06 13:45",
    end: "2021/03/06 14:30",
    title: "Panel: Ethics in AI",
    subtitle: "Discussing relevant ethical issues in AI and their impacts.",
    location: "Main Stage",
  },
  {
    start: "2021/03/06 14:35",
    end: "2021/03/06 15:45",
    title: "Showcase: Industry",
    subtitle: "Network with our sponsors and learn more about what they do!",
    location: "Expo Booths",
  },
  {
    start: "2021/03/06 15:50",
    end: "2021/03/06 16:30",
    title: "Speaker Presentation",
    subtitle: "Laurence Moroney - TensorFlow State of the Union",
    location: "Main Stage",
  },
  {
    start: "2021/03/06 16:30",
    end: "2021/03/06 16:45",
    title: "Day 1 Wrap Up",
    subtitle: "",
    location: "Main Stage",
  },

  //////////////////////////////////// DAY 2 ///////////////////////////////////////////////
  {
    start: "2021/03/07 10:00",
    end: "2021/03/07 10:15",
    title: "Day 2 Opening Ceremonies",
    subtitle: "Introducing what's in store for the day.",
    location: "Main Stage",
  },
  {
    start: "2021/03/07 10:15",
    end: "2021/03/07 10:55",
    title: "Speaker Presentation",
    subtitle: "David Hayes - Building an Outlier by Bringing Advanced Tech to Market",
    location: "Main Stage",
  },
  {
    start: "2021/03/07 11:00",
    end: "2021/03/07 11:40",
    title: "Speaker Presentation",
    subtitle: "Mark Caine - AI and the Sustainable Development Goals",
    location: "Main Stage",
  },
  {
    start: "2021/03/07 11:45",
    end: "2021/03/07 12:30",
    title: "Women in AI Leadership Panel",
    subtitle: "",
    location: "Main Stage",
  },
  {
    start: "2021/03/07 11:45",
    end: "2021/03/07 12:30",
    title: "Workshop: Google Cloud",
    subtitle: "",
    location: "Session 1",
  },
  {
    start: "2021/03/07 12:35",
    end: "2021/03/07 13:30",
    title: "CUCAI Pitch Competition",
    subtitle: "",
    location: "Main Stage",
  },
  {
    start: "2021/03/07 13:30",
    end: "2021/03/07 14:15",
    title: "Lunch Break",
    subtitle: "",
    location: "",
  },
  {
    start: "2021/03/07 14:15",
    end: "2021/03/07 15:00",
    title: "CUCAI Pitch Competition",
    subtitle: "",
    location: "Main Stage",
  },
  {
    start: "2021/03/07 15:10",
    end: "2021/03/07 15:55",
    title: "Speaker Presentation",
    subtitle: "Shivon Zilis - The Future of Brain-Machine Interfaces to Connect Humans and Computers",
    location: "Main Stage",
  },
  {
    start: "2021/03/07 16:00",
    end: "2021/03/07 16:30",
    title: "Closing Ceremonies",
    subtitle: "",
    location: "Main Stage",
  },
  {
    start: "2021/03/07 16:30",
    end: "2021/03/07 17:30",
    title: "Bonus Networking",
    subtitle: "Come network with our industry partners!",
    location: "Expo Booths",
  },
];

const StyledSchedulePage = styled.main`
  margin: 0 auto;
  padding-top: 10vh;
  background: #ffffff;

  ${media.phone`
    padding-top: 10vh;
  `}
`;

const Header = styled.section`
  background-image: url("/img/speaker-bg.svg");
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50% 20%;
  width: 100vw;
  margin: 30px 0;
  height: 250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.IBMPlexSansMedium};

  & * {
    max-width: 90%;
  }

  & > h1 {
    font-size: 2.5rem;
  }

  & > h2 {
    margin-top: 1rem;
    font-size: 1rem;
  }
`;

const StyledSchedule = styled.section`
  width: 80%;
  margin: 0 auto;

  ${media.phone`
    width: 100%;
  `}

  h2 {
    text-align: center;
  }
`;

const EventTable = styled.table`
  --table-item-padding: 20px;
  --border-radii: 20px;
  ${media.phone`                // when on phone make the padding smaller
    --table-item-padding: 10px;
    --border-radii: 0;
  `}
  width: 100%;
  margin-bottom: 40px;

  & tr:last-child td:first-child {
    border-bottom-left-radius: var(--border-radii);
  }

  & tr:last-child td:last-child {
    border-bottom-right-radius: var(--border-radii);
  }

  & tr:first-child th:first-child {
    border-top-left-radius: var(--border-radii);
  }

  & tr:first-child th:last-child {
    border-top-right-radius: var(--border-radii);
  }

  th {
    font-size: 1.2rem;
    padding: var(--table-item-padding);
  }

  td {
    padding: var(--table-item-padding);
    margin: 10px 0;
  }

  tr:nth-child(odd) {
    background-color: #ddf2f7;
  }

  // header row
  tr:first-child {
    background-color: ${theme.colors.cucaiBlue};
    color: white;
  }

  p {
    margin: 0;
  }

  .time {
    font-family: ${theme.fonts.IBMPlexSansMedium};
    color: ${theme.colors.darkBlue};
  }

  .title {
    font-family: ${theme.fonts.IBMPlexSansMedium};
    color: ${theme.colors.darkBlue};
  }

  .sub-title {
  }
`;

const TimeDivider = styled.span`
  display: inline;
  ${media.phone`
    display: none;
  `}
`;

const DayPicker = styled.div`
  width: 40%;
  height: 45px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.numDays}, 1fr);
  margin: 0 auto 40px auto;
  border: 0.5px solid #000000;
  border-radius: 100px;
  overflow: hidden;

  ${media.phone`
    width: 80%;
  `}

  button {
    border: none;
    height: inherit;
    background: none;
    z-index: 3;
    transition: color 0.2s ease;
  }

  button.selected {
    color: white;
  }

  div.slider {
    display: inline;
    position: relative;
    top: -45px;
    left: ${(props) => props.selectedDay * 100}%;
    transition: left 0.2s ease;
    /* left: ${(props) => (props.selectedDay * 100) / props.numDays}%; */
    border-radius: 20px;
    /* width: ${(props) => 100 / props.numDays}%; */
    /* width: 50px; */
    height: 45px;
    background-color: ${theme.colors.cucaiBlue};
    z-index: 2;
  }
`;

const Schedule = () => {
  const days = getDays(); // create an array of all the dates the conference occurs
  const [eventsOnDay, setEventsOnDay] = useState(findEventsOnDay(0)); // initialize the eventsOnDay to all the events that happen on day 0 (1st day)
  const [selectedDay, setSelectedDay] = useState(0);

  function convertTo12Hr(eventDate) {
    return date.transform(eventDate, "YYYY/MM/DD HH:mm", "h:mm A");
  }

  function getDate(eventDate) {
    return date.transform(eventDate, "YYYY/MM/DD HH:mm", "YYYY/MM/DD");
  }

  function getDays() {
    const days = [];
    for (const event of events) {
      let date = getDate(event.start);
      if (!days.includes(date)) {
        // if this date hasn't already been added to the days array, add it
        days.push(date);
      }
    }
    return days;
  }

  function findEventsOnDay(day) {
    // filter the master events list for all the events whose start date matches the selected date
    return events.filter((event) => getDate(event.start) === days[day]);
  }

  function changeDay(day) {
    setSelectedDay(day);
    setEventsOnDay(findEventsOnDay(day)); //set eventsOnDay to the filtered list of events occuring on the selected day
  }

  return (
    <StyledSchedule>
      <DayPicker numDays={days.length} selectedDay={selectedDay}>
        {days.map((day, i) => (
          <button
            className={i === selectedDay ? "selected" : ""}
            onClick={() => changeDay(i)}
          >
            Day {i + 1}
          </button>
        ))}
        <div role="none" className="slider"></div>
      </DayPicker>
      <h2>
        {date.transform(days[selectedDay], "YYYY/MM/DD", "dddd MMMM DDD")}
      </h2>
      <EventTable>
        <tr>
          <th>Time</th>
          <th>Event</th>
          <th>Location</th>
        </tr>
        {eventsOnDay.map((event, i) => (
          <tr key={i}>
            <td className="time">
              {convertTo12Hr(event.start)} <TimeDivider>-</TimeDivider>{" "}
              {convertTo12Hr(event.end)}
            </td>
            <td>
              <div>
                <p class="title">{event.title}</p>
                <p class="sub-title">{event.subtitle}</p>
              </div>
            </td>
            <td>{event.location}</td>
          </tr>
        ))}
      </EventTable>
    </StyledSchedule>
  );
};

const SchedulePage = ({ data }) => {
  return (
    <Layout>
      <Helmet title="Schedule" />
      <StyledSchedulePage>
        <Header>
          <h1>Event Schedule</h1>
          <h2>
            *All times are in EST
            {/* , all locations are on{" "}
            <u>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://hopin.com/events/cucai-2021"
              >
                Hopin
              </a>
            </u> */}
          </h2>
        </Header>
        <Schedule />
      </StyledSchedulePage>
    </Layout>
  );
};

export default SchedulePage;

export const pageQuery = graphql`
  query SchedulePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "schedule-page" } }) {
      html
    }
  }
`;
