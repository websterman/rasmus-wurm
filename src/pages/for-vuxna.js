import React, { useEffect } from 'react';
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Header from '../components/header';
import BG from '../images/Bokeh_vuxen.jpg';
import curtains from '../images/curtains.jpg';
import Footer from '../components/footer';
import BubbleImg from '../images/bubble.png';

const TextBox = styled.div`
color: white;
    background-image: url(${BG});
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

const IntroBox = styled.div`
    background-image: url(${curtains});
    height: 0;
    position: relative;
    padding-top: 34%;
    background-size: cover;
    background-position: center center;
    > div {
      color: white;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }

`;

const Row = styled.div`
    position: relative;
    display: flex;
    align-items: stretch;
    `;


const OrderLeft = css`
    order: 1;
    width: 50%;`

const OrderRight = css`
    order: 2;
    width: 50%;
`
const AdultImg = styled.img`
    width: 100%;
    margin: 0;
    display: block;`;
const ForAdults = ({ data }) => {
  var parallaxEls;
  useEffect(() => {

    parallaxEls = document.querySelectorAll("[data-speed]");
    window.addEventListener("scroll", scrollHandler);

  }, [])


  function scrollHandler() {

    for (const parallaxEl of parallaxEls) {
      const direction = parallaxEl.dataset.direction == "up" ? "-" : "";
      const transformY = this.pageYOffset * parallaxEl.dataset.speed;
      if (parallaxEl.classList.contains("banner-title")) {
        parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-6deg)`;
      } else if (parallaxEl.classList.contains("banner-subtitle")) {
        parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-3deg)`;
      } else {
        parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
      }
    }
  }

  const Bubble = styled.img`
    opacity: .15;
    position: absolute;
    top: -60px;`
  return (
    <div>
      <Header />
      <IntroBox className="intro-container"><div className="IntroText">
        <h2>{data.wordpressPage.acf.intro.intro_titel}</h2>
        <p dangerouslySetInnerHTML={{ __html: data.wordpressPage.acf.intro.intro_content }} />
      </div>
      </IntroBox>

      {data.wordpressPage.acf.row.map((aRow, index) => {
        let imgClass = OrderLeft;
        let textClass = OrderRight;
        console.log(aRow);
        if (index % 2 === 1) {
          imgClass = OrderRight;
          textClass = OrderLeft;
        }
        const bubbleNo = [0, 1, 2, 3, 4,5 ,6,7,8,9,10];
        return <Row key={index} className="adult-box">{bubbleNo.map(b => { return <Bubble key={b} className="bubbl" style={{ width: 3 + Math.random() * 6 + "%", left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} data-speed={+ Math.random().toFixed(1) * .6} data-direction="up" src={BubbleImg} /> })}
          <div css={imgClass} className="image-container"><AdultImg src={aRow.row_image.localFile.childImageSharp.original.src} /></div><TextBox css={textClass}><div><h1>{aRow.row_text.row_title}</h1><p dangerouslySetInnerHTML={{ __html: aRow.row_text.row_content }} /></div></TextBox></Row>
      })}
      <Footer />
    </div>
  )
}
export default ForAdults;

export const adults = graphql`
query ($adultpage: Int = 25) {
    wordpressPage (wordpress_id: {eq: $adultpage}) {
     id
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