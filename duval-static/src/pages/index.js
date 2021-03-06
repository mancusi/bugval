import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => {
  return(
    <Container style={{ color: `purple` }}>
      <Header headerText="Hello Bugval"/>
      {data.allDuvals.edges.map(({ node }) => 
        (<div key={node.id}>
          <Link to={node.fields.slug}>{node.title}</Link>
        </div>)
      )}
    </Container>
  )
}

export const query = graphql`
    query {
      allDuvals {
        edges {
          node {
            title,
            wisdom
            fields {
              slug
            }
          }
        }
      }
    }
  `