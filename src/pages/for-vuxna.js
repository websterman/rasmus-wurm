import React from 'react';
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Header from '../components/header';
import BG from '../images/Bokeh_vuxen.jpg';
import curtains from '../images/curtains.jpg';

const TextBox = styled.div`
color: white;
    background-image: url(${BG});
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

const IntroBox = styled.div `
    background-image: url(${curtains});
    height: 0;
    position: relative;
    padding-top: 34%;
    background-size: cover;
    background-position: center center;

`;
const IntroText = styled.div `
    color: white;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);`;

const Row = styled.div `
    position: relative;
    display: flex;
    align-items: stretch;
    `;

const ImgBox = styled.div `
`;

const OrderLeft = css `
    order: 1;
    width: 50%;`

const OrderRight = css `
    order: 2;
    width: 50%;
`
const AdultImg = styled.img `
    width: 100%;
    margin: 0;
    display: block;`;

    const ForAdults = ({ data }) => {
    console.log(data.wordpressPage)
  return (
    <div>
        <Header />
        <IntroBox className="intro-container"><IntroText>
        <h2>{data.wordpressPage.acf.intro.intro_titel}</h2>
        <p dangerouslySetInnerHTML={{__html: data.wordpressPage.acf.intro.intro_content}} />
        </IntroText>
        </IntroBox>

        {data.wordpressPage.acf.row.map( (aRow, index) => {
            let imgClass = OrderLeft;
            let textClass = OrderRight;
            console.log(aRow);
            if( index %2 === 1) {
                imgClass = OrderRight;
                textClass = OrderLeft;
            }
            return <Row key={index} className="adult-box">
            <div css={imgClass} className="image-container"><AdultImg src={aRow.row_image.localFile.childImageSharp.original.src} /></div><TextBox css={textClass}><div><h1>{aRow.row_text.row_title}</h1><p dangerouslySetInnerHTML={{__html: aRow.row_text.row_content}}/></div></TextBox></Row>
        })}
 </div>
    )
}
export default ForAdults;

/* export const query = graphql`
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
}`; */
export const adults = graphql`
query ($adultpage: Int = 25) {
 	
    wordpressPage (wordpress_id: {eq: $adultpage}) {
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
            
            intro {
              intro_titel
              intro_content
            }
            row {
              row_image {
                localFile {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }
              row_text {
                row_title
                row_content
              }
            }
            
          }
  
  }
}`; 