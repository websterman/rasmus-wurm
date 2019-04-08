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
    font-family: 'roboto', sans;
  }
  > form button {
    margin: 10px 0 0;
    border: 1px solid #93278f;
  }
  > form div {
    width: 100%;
  }
  > div > p {
    margin: 20px 0;
  } 
`;
const Footer = ({ siteTitle }) => (
  
  <StyledFooter> 
    <div><Typography variant="h4">Rasmus Wurm</Typography>
    <Typography variant ="body1">+46 70 398 09 82</Typography>
    <a href="mailto:info@rasmuswurm.se"><Typography variant="body1">info@rasmuswurm.se</Typography></a>
    <h3></h3>
      </div>
      <ContactForm />
      
  </StyledFooter>
)


export default Footer
