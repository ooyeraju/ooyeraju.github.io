import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const NameHeader = styled.h1`
  font-size: 5rem;
  margin-bottom: 0.5rem;
  font-family: "Mukta";
`
const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  color: rgb(255, 45, 85);
  font-family: "Homemade Apple";
  // font-weight: bold;
`
/* 
const UserId = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.3rem;
  text-align: left;
  color: grey;
` */

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            githubId
            subtitle
          }
        }
      }
    `}
    render={(data) => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          {/* <UserId> {data.site.siteMetadata.githubId} </UserId> */}
          <Description>{data.site.siteMetadata.subtitle}</Description>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
