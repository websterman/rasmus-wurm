import React from "react";
import { Link, graphql } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import SEO from "../components/seo";
import Logo from "../images/Logo_Vit.svg";
import { Typography } from "@material-ui/core";
import { Helmet } from "react-helmet";
const IndexPage = ({ data }) => {
  const Bg = styled.div`
    background-image: url(${data.wordpressPage.acf.bakgrund.localFile
      .childImageSharp.original.src});
    height: 100%;
    background-size: cover;
    background-position: center center;
  `;
  const FrontPageMenu = styled.div`
    perspective: 600px;
    position: absolute;
    width: 40%;
    height: 50%;
    left: 47%;
    text-align: center;
    top: 42%;
    transform: translateY(-50%);
    @media (max-device-width: 768px) {
      width: 80%;
      left: 17%;
    }
  `;
  const CenteredParagraph = css`
    text-align: center;
    color: white !important;
    transform: scale(0, 0);
    animation: 0.3s mustasch 1.7s forwards;
    font-size: 15px;
  `;

  const AgeButton = css`
    width: 38%;
    display: inline-block;
    margin: 0 auto 0.5vw;
    fill: white;
    transition: fill 5s;
  `;
  const Older = css`
    margin: 0 5% 0 0;
    :hover {
      /*    fill: DarkRed;
      animation: Shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
    */
    }
  `;
  const Younger = css`
    margin: 0 0 0 5%;
    :hover {
      /*    fill: PaleGreen;
      animation: Bounce 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
    */
    }
  `;
  var LogoCSSStart = css`
    transition: transform 0.5s ease-in-out;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  `;
  return (
    <Bg>
      <SEO
        title="Razmataz - Ny underhållning för stora och småome"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <FrontPageMenu>
        <img className="logo" css={LogoCSSStart} src={Logo} />
        <Link to="/for-vuxna">
          <svg
            className="mustasch"
            css={[AgeButton, Older]}
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            viewBox="0 0 915.38776 723.93384"
          >
            <path
              className="st0"
              d="M 337.83,190.29383 H 374.8 C 398.46,-94.316174 0,-40.896174 0,226.10383 c 0,240.9 190.13,360.21 312.99,398.83 180.52,56.76 389.07,34.98 472.65,99 298.51,-149.03 4.79,-481.06 -115.11,-486.11 -230.44,392.77 -623.66,162.75 -623.66,-21.3 0.01,-201.170004 311.37,-260.550004 290.96,-26.23 z"
              id="path4"
            />
          </svg>
        </Link>
        <Link to="/familj">
          <svg
            className="mustasch"
            css={[AgeButton, Younger]}
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            viewBox="0 0 915.3877 723.93384"
          >
            <path
              className="st0"
              d="m 577.55774,190.29383 h -36.97 c -23.66,-284.610004 374.79996,-231.190004 374.79996,35.81 0,240.9 -190.12996,360.21 -312.98996,398.83 -180.52,56.76 -389.07,34.98 -472.65,99 -298.51,-149.03 -4.79,-481.06 115.11,-486.11 230.44,392.77 623.65996,162.75 623.65996,-21.3 -0.01,-201.170004 -311.36996,-260.550004 -290.95996,-26.23 z"
              id="path4"
            />
          </svg>
        </Link>
        {
          <Typography variant="body1" css={CenteredParagraph}>
            Välj målgrupp
          </Typography>
        }
      </FrontPageMenu>
    </Bg>
  );
};

export default IndexPage;
export const query = graphql`
  query staticFrontPage($frontpage_id: Int = 2) {
    wordpressPage(wordpress_id: { eq: $frontpage_id }) {
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
  }
`;
