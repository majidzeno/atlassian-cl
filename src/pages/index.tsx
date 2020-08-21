import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "../components/slider"

const IndexPage = () => (
  <Layout>
    <SEO title="Majid Eltayeb" />
    <Slider />
  </Layout>
)

export default IndexPage
