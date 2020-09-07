import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import logo from '../img/Logo main.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'
const StyledFooter = styled.footer`
  width: 100%;
  height: 70px;
  display: flex;
`;

const StyledLogo = styled.img`
  height: 50px;
  margin: 1em;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>We acknowledge the land we are meeting on is the traditional territory of many nations including the Mississaugas of the Credit, the Anishnabeg, the Chippewa, the Haudenosaunee and the Wendat peoples and is now home to many diverse FirstNations, Inuit and Métis peoples. We also acknowledge that the city of Toronto is covered by Treaty 13 with the Mississaugas of the Credit. To acknowledge this traditional territory is to recognize the territory’s significance for the Indigenous peoples who lived, and continue to live, upon it.</p>
      <Link to="/">
        <StyledLogo src={logo} alt="logo" />
      </Link>
      <Link to="/">
        <StyledLogo src={facebook} alt="facebook" />
      </Link>
      <Link to="https://instagram.com/cucai2021">
        <StyledLogo src={instagram} alt="instagram" />
      </Link>
    </StyledFooter>
  );
};

// const Footer = class extends React.Component {
//   render() {
//     return (
//       <footer className="footer has-background-black has-text-white-ter">
//         <div className="content has-text-centered">
//           <img
//             src={logo}
//             alt="Kaldi"
//             style={{ width: '14em', height: '10em' }}
//           />
//         </div>
//         <div className="content has-text-centered has-background-black has-text-white-ter">
//           <div className="container has-background-black has-text-white-ter">
//             <div style={{ maxWidth: '100vw' }} className="columns">
//               <div className="column is-4">
//                 <section className="menu">
//                   <ul className="menu-list">
//                     <li>
//                       <Link to="/" className="navbar-item">
//                         Home
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="navbar-item" to="/about">
//                         About
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="navbar-item" to="/products">
//                         Products
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="navbar-item" to="/contact/examples">
//                         Form Examples
//                       </Link>
//                     </li>
//                     <li>
//                       <a
//                         className="navbar-item"
//                         href="/admin/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Admin
//                       </a>
//                     </li>
//                   </ul>
//                 </section>
//               </div>
//               <div className="column is-4">
//                 <section>
//                   <ul className="menu-list">
//                     <li>
//                       <Link className="navbar-item" to="/blog">
//                         Latest Stories
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="navbar-item" to="/contact">
//                         Contact
//                       </Link>
//                     </li>
//                   </ul>
//                 </section>
//               </div>
//               <div className="column is-4 social">
//                 <a title="facebook" href="https://facebook.com">
//                   <img
//                     src={facebook}
//                     alt="Facebook"
//                     style={{ width: '1em', height: '1em' }}
//                   />
//                 </a>
//                 <a title="twitter" href="https://twitter.com">
//                   <img
//                     className="fas fa-lg"
//                     src={twitter}
//                     alt="Twitter"
//                     style={{ width: '1em', height: '1em' }}
//                   />
//                 </a>
//                 <a title="instagram" href="https://instagram.com">
//                   <img
//                     src={instagram}
//                     alt="Instagram"
//                     style={{ width: '1em', height: '1em' }}
//                   />
//                 </a>
//                 <a title="vimeo" href="https://vimeo.com">
//                   <img
//                     src={vimeo}
//                     alt="Vimeo"
//                     style={{ width: '1em', height: '1em' }}
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     )
//   }
// }

export default Footer;
