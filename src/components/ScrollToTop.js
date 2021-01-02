import React, { Component } from "react";
import styled from "styled-components";

import upArrow from "../img/up-arrow.svg";

const Button = styled.img`
  cursor: pointer;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 15px;
  right: 25px;
  z-index: 1000000;
`;

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;

    return (
      <>
        {is_visible && (
          <Button src={upArrow} onClick={() => this.scrollToTop()}></Button>
        )}
      </>
    );
  }
}
