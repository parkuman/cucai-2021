import React, { useEffect, createRef } from "react";
import styled from "styled-components";
import lottie from "lottie-web";

import animation from "../img/animations/handshake.json";
import media from "../styles/media";

const StyledHandshake = styled.div`
  max-width: 300px;
  max-height: 300px;

  ${media.phone`
    max-width: 200px;
    max-height: 200px;
  `}
`;

const Handshake = () => {
  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation,
    });
    return () => anim.destroy(); // clean up on unmount
  }, []);

  return <StyledHandshake ref={animationContainer} />;
};

export default Handshake;
