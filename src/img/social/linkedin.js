import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
    fill: var(--text-color-primary);
`;

const LinkedinIcon = ({ size }) => (
    <StyledSvg
        width={size ? size : "24px"}
        height={size ? size : "24px"}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M20 12.8619V20.256H15.7134V13.3571C15.7134 11.624 15.0933 10.4413 13.5417 10.4413C12.3572 10.4413 11.6524 11.2384 11.3423 12.0094C11.2292 12.2851 11.2001 12.6687 11.2001 13.0546V20.256H6.91198C6.91198 20.256 6.96973 8.57151 6.91198 7.36091H11.1997V9.18874C11.191 9.20241 11.1797 9.21715 11.1715 9.2304H11.1997V9.18874C11.7693 8.31135 12.7867 7.05797 15.0638 7.05797C17.885 7.05793 20 8.90101 20 12.8619ZM2.42646 1.14484C0.959506 1.14484 0 2.10704 0 3.37237C0 4.61013 0.931746 5.60153 2.36954 5.60153H2.39818C3.89355 5.60153 4.82352 4.61031 4.82352 3.37237C4.79535 2.10704 3.89355 1.14484 2.42646 1.14484ZM0.254675 20.256H4.54114V7.36091H0.254675V20.256Z" />
    </StyledSvg>
);

export default LinkedinIcon;