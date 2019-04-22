import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StaticAboutPage = () => (
  <Layout>
    <SEO title="about appendTo" />
    <h1>About appendTo</h1>
    <p>Generated manually</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default StaticAboutPage
