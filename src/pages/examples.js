import React from "react"
import Header from "../examples/header"
import Layout from "../components/layout"
import HeaderStatic from "../examples/headerStatic"
import { graphql } from "gatsby"
const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      <p>Hello from examples page!</p>
      <h2>{author}</h2>
      <Header />
      <HeaderStatic />
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`
export default examples
