import React from "react"
import Layout from "../components/layout"
import SEO from "../ui/SEO"
import Settings from "../ui/Settings"

const SettingsPage = () => (
  <Layout>
    <SEO title="Settings | Hodl Stream" path={"/settings"} />
    <Settings />
  </Layout>
)

export default SettingsPage
