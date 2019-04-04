import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core";
import  HeaderLogo  from '../images/Logo_Lila.svg';
import Menu from './menu';
const LogoContainer = styled.div`
background: white;
text-align: center;
padding: 27px 0;
`;
const Logo = styled.img `
max-height: 116px;
margin: 0;`
const Header = ({ siteTitle }) => (
  
  <header>
    {console.log({HeaderLogo})}
    <LogoContainer><Logo src={HeaderLogo} height= "100%"/></LogoContainer>
    <Menu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
