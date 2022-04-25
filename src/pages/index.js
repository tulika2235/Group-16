import React from "react"
import Hero from "../components/Hero/Hero"
import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import Trips from "../components/Trips"
import Reviews from "../components/Reviews"
import Email from "../components/Email"

const Index = () => {
  return (
    <Layout>
    <Hero/>
    <Reviews/>
    <Trips heading="We are available in" />
    <Seo title="Home"/>
    <Email/>
    </Layout>
  )
}

export default Index