import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
    fill: var(--text-color-primary);
`;

const InstagramIcon = ({ size }) => (
    <StyledSvg
        width={size ? size : "24px"}
        height={size ? size : "24px"}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="#676767"
    >
        <path d="M3.75391 1.60663C3.12109 1.85272 2.58594 2.18085 2.05078 2.716C1.51562 3.24725 1.1875 3.78632 0.941406 4.41522C0.703125 5.0246 0.542969 5.72382 0.496094 6.74725C0.449219 7.77069 0.4375 8.09882 0.4375 10.7082C0.4375 13.3176 0.449219 13.6457 0.496094 14.6691C0.542969 15.6926 0.707031 16.3918 0.941406 17.0012C1.1875 17.634 1.51562 18.1691 2.05078 18.7043C2.58594 19.2394 3.12109 19.5676 3.75391 19.8137C4.36328 20.0519 5.0625 20.2121 6.08594 20.259C7.10938 20.3058 7.4375 20.3176 10.0469 20.3176C12.6563 20.3176 12.9844 20.3058 14.0078 20.259C15.0312 20.2121 15.7305 20.048 16.3398 19.8137C16.9727 19.5676 17.5078 19.2394 18.043 18.7043C18.5781 18.1691 18.9062 17.634 19.1523 17.0012C19.3906 16.3918 19.5508 15.6926 19.5977 14.6691C19.6445 13.6457 19.6562 13.3176 19.6562 10.7082C19.6562 8.09882 19.6445 7.77069 19.5977 6.74725C19.5508 5.72382 19.3867 5.0246 19.1523 4.41522C18.9062 3.78632 18.5781 3.24725 18.0469 2.716C17.5117 2.18085 16.9766 1.85272 16.3437 1.60663C15.7344 1.36835 15.0352 1.20819 14.0117 1.16132C12.9883 1.11444 12.6602 1.10272 10.0508 1.10272C7.44141 1.10272 7.11328 1.11444 6.08984 1.16132C5.0625 1.20428 4.36328 1.36835 3.75391 1.60663ZM13.9297 2.88788C14.8672 2.93085 15.375 3.0871 15.7148 3.21991C16.1641 3.39569 16.4844 3.60272 16.8203 3.93866C17.1562 4.2746 17.3633 4.59491 17.5391 5.04413C17.6719 5.38397 17.8281 5.89178 17.8711 6.82928C17.918 7.841 17.9258 8.14569 17.9258 10.7121C17.9258 13.2785 17.9141 13.5832 17.8711 14.5949C17.8281 15.5324 17.6719 16.0402 17.5391 16.3801C17.3633 16.8293 17.1562 17.1496 16.8203 17.4855C16.4844 17.8215 16.1641 18.0285 15.7148 18.2043C15.375 18.3371 14.8672 18.4933 13.9297 18.5363C12.918 18.5832 12.6133 18.591 10.0469 18.591C7.48047 18.591 7.17578 18.5793 6.16406 18.5363C5.22656 18.4933 4.71875 18.3371 4.37891 18.2043C3.92969 18.0285 3.60938 17.8215 3.27344 17.4855C2.9375 17.1496 2.73047 16.8293 2.55469 16.3801C2.42188 16.0402 2.26562 15.5324 2.22266 14.5949C2.17578 13.5832 2.16797 13.2785 2.16797 10.7121C2.16797 8.14569 2.17969 7.841 2.22266 6.82928C2.26562 5.89178 2.42188 5.38397 2.55469 5.04413C2.73047 4.59491 2.9375 4.2746 3.27344 3.93866C3.60938 3.60272 3.92969 3.39569 4.37891 3.21991C4.71875 3.0871 5.22656 2.93085 6.16406 2.88788C7.17578 2.841 7.48047 2.83319 10.0469 2.83319C12.6133 2.83319 12.918 2.841 13.9297 2.88788Z" />
        <path d="M5.11328 10.7121C5.11328 13.4387 7.32422 15.6457 10.0469 15.6457C12.7695 15.6457 14.9805 13.4348 14.9805 10.7121C14.9805 7.98947 12.7734 5.77853 10.0469 5.77853C7.32031 5.77853 5.11328 7.98556 5.11328 10.7121ZM13.25 10.7121C13.25 12.4817 11.8164 13.9153 10.0469 13.9153C8.27734 13.9153 6.84375 12.4817 6.84375 10.7121C6.84375 8.9426 8.27734 7.509 10.0469 7.509C11.8164 7.509 13.25 8.9426 13.25 10.7121Z" />
        <path d="M15.1797 6.73557C15.8161 6.73557 16.332 6.21964 16.332 5.58322C16.332 4.9468 15.8161 4.43088 15.1797 4.43088C14.5433 4.43088 14.0273 4.9468 14.0273 5.58322C14.0273 6.21964 14.5433 6.73557 15.1797 6.73557Z" />
    </StyledSvg>
);

export default InstagramIcon;
