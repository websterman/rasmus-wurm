import React, { useEffect } from "react";
import { Link, graphql } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Header from "../components/header";
import BG from "../images/Bokeh_vuxen.jpg";
import curtains from "../images/curtains.jpg";
import Footer from "../components/footer";
import SEO from "../components/seo";
import Bubbles from "../components/bubbles";
import "../components/layout.css";
import { isMobile } from "react-device-detect";

const TextBox = styled.div`
  color: white;
  background-image: url(${BG});
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  > div > h1 {
    text-align: center;
  }
  @media (max-device-width: 768px) {
    background-image: none;
    position: absolute;
    top: 0;
    width: 100%;
    display: block;
    padding: 10px 20px;
    > div > h1 {
      text-align: center;
      -webkit-text-stroke: 1px purple;
    }
    > div > div {
      position: absolute;
      bottom: 0px;
      width: 100%;
      left: 0px;
      padding: 10px 20px;
    }
  }
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
  @media (max-device-width: 768px) {
    padding-top: 0%;
    padding: 20px 40px;
    height: auto;
    > div {
      width: 100%;
      position: relative;
      top: 0;
      left: 0;
      transform: none;
    }
  }
`;

const Row = styled.div`
  position: relative;
  display: flex;
* {text-decoration: none; }
  align-items: stretch;
  @media (max-device-width: 768px) {
    display: blocK;
    > .image-container {
      width: 100%;
    }
  }
`;

const OrderLeft = css`
  order: 1;
  width: 50%;
`;

const OrderRight = css`
  order: 2;
  width: 50%;
`;
const AdultImg = styled.img`
  width: 100%;
  margin: 0;
  display: block;
`;
const PageWrap = styled.div`
  overflow: hidden;
`;
const Familj = ({ data }) => {
  useEffect(() => {
    if (isMobile) {
      let textBoxes = document.querySelectorAll(".textbox");
      for (let textbox of textBoxes) {
        textbox.style.height = textbox.clientWidth * 1.3333334 + "px";
      }
    }
  }, []);
  return (
    <PageWrap>
      <SEO tite="Razmataz - Ny underhållning för familjer" />
      <Header />
      <IntroBox className="intro-container">
        <div className="IntroText">
          <h2>{data.wordpressPage.acf.intro.intro_titel}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data.wordpressPage.acf.intro.intro_content
                .replace(/<p>/g, "<div>")
                .replace(/<\/p>/g, "</div>")
            }}
          />
        </div>
      </IntroBox>

      {data.wordpressPage.acf.row.map((aRow, index) => {
        let imgClass = OrderLeft;
        let textClass = OrderRight;

        if (index % 2 === 1) {
          imgClass = OrderRight;
          textClass = OrderLeft;
        }
        return (
          <a href={`http://instagram.com/explore/tags/${aRow.row_hashtag}`}>
            <Row key={index} className="adult-box">
              <Bubbles amount="3" />
              <div css={imgClass} className="image-container">
                {console.log(aRow)}
                {aRow.row_image && (
                  <AdultImg
                    src={aRow.row_image.localFile.childImageSharp.original.src}
                  />
                )}
              </div>
              <TextBox className="textbox" css={textClass}>
                <div>
                  <h1>{aRow.row_text.row_title}</h1>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: aRow.row_text.row_content
                        .replace(/<p>/g, "<div>")
                        .replace(/<\/p>/g, "</div>")
                    }}
                  />
                </div>
              </TextBox>
            </Row>
          </a>
        );
      })}
      <Footer origin="Familj" />
    </PageWrap>
  );
};
export default Familj;

export const adults = graphql`
  query($adultpage: Int = 64) {
    wordpressPage(wordpress_id: { eq: $adultpage }) {
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
  }
`;
