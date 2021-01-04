import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Button from "../components/Button";

import { Tab, Row, Col, Nav } from "react-bootstrap/";

const StyledDetails = styled.div`
  padding: 15px;
  float: left;
`;

const StyledInvolved = styled.div`
  height: 200px;
  padding-top: 20px;
`;

const Involved = () => {
  return (
    <StyledInvolved>
      <Tab.Container id="left-tabs-example" defaultActiveKey="Delegates">
        <Row>
          <Col sm={3}>
            <Nav
              variant="pills"
              className="flex-column"
              style={
                {
                  // filter: "drop-shadow(6px 6px 0px #1a4fcb)"
                }
              }
            >
              <Nav.Item>
                <Nav.Link eventKey="Delegates">Delegates</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Speakers">Speakers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Student Groups">Student Groups</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="Delegates">
                <StyledDetails>
                  <p>
                    Tune in to our taster event on January 23rd. Applications
                    will open soon after, so be sure to apply!
                  </p>

                  <Link to="/taster">
                    <Button borderStyle="solid">
                      Taster Event Information
                    </Button>
                  </Link>
                </StyledDetails>
              </Tab.Pane>
              <Tab.Pane eventKey="Speakers">
                <StyledDetails>
                  <p>
                    As a CUCAI speaker, you will have the unique opportunity to
                    speak to and engage with the nation's leading undergraduate
                    AI talent. Conference speakers are encouraged to provide
                    students with relevant insight from their own work and the
                    AI field in an innovative, creative, and personable way.
                    Speaker opportunities include speeches, as well as panelist
                    positions, workshop leaders and incubator pitch competition
                    judges.
                  </p>

                <a href="CUCAI 2021 Speaker Package.pdf">
                  <Button borderStyle="solid">Speakers Package</Button>
                </a>
              </StyledDetails>
            </Tab.Pane>
            <Tab.Pane eventKey="Student Groups">
              <StyledDetails>
                <p>
                  In its inaugural year of implementation, CUCAI has developed a
                  “Tier Collaboration Program” structured to facilitate
                  involvement from undergraduate AI groups across Canada.
                  Incentives include reserved delegate spots, design showcase
                  involvement, participation in the incubator pitch competition,
                  the undergraduate AI executive showcase and more.
                  Opportunities for partnership with other Canadian
                  undergraduate AI societies have never been so plentiful, as
                  CUCAI’s national reach expands.
                </p>

                  <a href="CUCAI Student Group Partnership Package.pdf">
                    <Button borderStyle="solid">
                      Student Group Partnership Package
                    </Button>
                  </a>
                </StyledDetails>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </StyledInvolved>
  );
};

export default Involved;
