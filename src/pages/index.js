import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Logo from '../images/Logo_Vit.svg';
import Older from '../images/Aldre.svg';
import Younger from '../images/Yngre.svg';



const IndexPage = ({data}) =>  {
  const Bg = styled.div `
  background-image: url(${data.wordpressPage.acf.bakgrund.localFile.childImageSharp.original.src});
  height: 100%;
  background-size: cover;
  background-position: center center;
  ` 
  const FrontPageMenu = styled.div `
    position: absolute;
    width: 27%;
    height: 50%;
    left: 47%;
    top:42%;
    transform: translateY(-50%);
  `;
  const CenteredParagraph = styled.p `
  text-align:center;
  color: white;
  font-family: sans;
  font-size: 15px;`
  const AgeButton = css `
    width: 18%;
    display: block;
    margin: 0 auto .5vw;
  `
  return (
  <Bg>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <FrontPageMenu>
      <img src={Logo} />
      <Link to="/for-vuxna"><img css={AgeButton} src={Older} /></Link>
      <a href="http://wurm.se"><img css={AgeButton} src={Younger} /></a>
      <CenteredParagraph>Välj målgrupp</CenteredParagraph>
    </FrontPageMenu>
    
  </Bg>
)
}

export default IndexPage
export const query = graphql`
query staticFrontPage($frontpage_id: Int = 2){
 	
  wordpressPage (wordpress_id: {eq: $frontpage_id}){
   id
      wordpress_id
      date
      guid
      modified
      slug
      status
      type
      link
      title
      content  
         acf {
          
          bakgrund {
            localFile {
              childImageSharp {
                original {
                  src
                }
              }
            }
            
          }
        }

}
}`;