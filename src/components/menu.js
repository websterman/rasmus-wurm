import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core";
import {Link} from 'gatsby';
import  HeaderLogo  from '../images/Logo_Lila.svg';
const MenuContainer = styled.div`
background: white;
text-align: center;
padding: 0;
margin: 0;
border: 1px solid #eee;
`;
const Logo = styled.img `
max-height: 116px;`
const MenuList = styled.ul `
list-style-type: none;
text-align: center;
position: sticky;
top: 0;
padding: 0;
margin: 0;
`
const MenuItem = styled.li `
display: inline-block;
margin: 0;`;

const MenuLink = css `
display: block;
padding: 10px 20px;
color: #6b2f76;
font-size: 14px;
text-decoration: none;

`;
 const Menu = ({ siteTitle }) => (
  
  <MenuContainer>
      <MenuList>
        <MenuItem><a css={MenuLink} href="http://wurm.se">FÖR BARN & UNGA</a></MenuItem>
        <MenuItem><Link css={MenuLink} to="/kontakt">KONTAKT & BOKNING</Link></MenuItem>
      </MenuList>
    
  </MenuContainer>
)

export default Menu
