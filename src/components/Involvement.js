import React from "react";

import styled from "styled-components";

import { Tab, Tabs, Row, Col, Nav } from 'react-bootstrap/';

const StyledDetails = styled.div`
  padding: 15px;
  float: left;
`;

const Involved = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="Industry Partners">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column" style={{
            filter: "drop-shadow(6px 6px 0px #1a4fcb)"
          }}>
            <Nav.Item>
              <Nav.Link eventKey="Industry Partners">Industry Partners</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Speakers">Speakers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Student Groups">Student Groups</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Delegates">Delegates</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="Industry Partners">
              <StyledDetails>We will work closely with our industry partners to create an environment where undergraduate students and professionals can share their ideas and experiences, and explore the world of AI together. As a partner, CUCAI is the perfect place to interact and connect with the top talent in AI and machine learning.
</StyledDetails>
            </Tab.Pane>
            <Tab.Pane eventKey="Speakers">
              <StyledDetails>As a CUCAI speaker, you will have the unique opportunity to speak to and engage with the nation's leading undergraduate AI talent. Conference speakers are encouraged to provide students with relevant insight from their own work and the AI field in an innovative, creative, and personable way. Speaker opportunities include speeches, as well as panelist positions, workshop leaders and inQUbate pitch competition judges.
</StyledDetails>
            </Tab.Pane>
            <Tab.Pane eventKey="Student Groups">
              <StyledDetails>In its inaugural year of implementation, CUCAI has developed a “Tier Collaberation Program” structured to facilitate involvement from undergraduate AI groups across Canada. Incentives include reserved delegate spots, design showcase involvement, participation in the inQUbate pitch competition, the undergraduate AI executive showcase and more. Opportunities for partnership with other Canadian undergraduate AI societies have never been so plentiful, as CUCAI’s national reach expands.
</StyledDetails>
            </Tab.Pane>
            <Tab.Pane eventKey="Delegates">
              <StyledDetails>Stay tuned for delegate applications!</StyledDetails>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
};

export default Involved;