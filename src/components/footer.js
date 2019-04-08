import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core";
import ContactForm from "./contactForm";
import Typography from '@material-ui/core/Typography';


const StyledFooter = styled.div`
  display: flex;
  padding: 27px 60px;
  background: white;
    > div, > form {
      color: #93278f;
    flex: 50%;
  }
  > div > *, > form  button, > form label {
    color: #93278f;
    font-family: 'Open sans', sans;
  }
  > form 
`;
const Footer = ({ siteTitle }) => (
  
  <StyledFooter> 
    <div><Typography  variant="h4">Rasmus Wurm</Typography>
    <h3></h3>
      </div>
      <ContactForm />
      
  </StyledFooter>
)


export default Footer
