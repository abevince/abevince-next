import { NextPage } from 'next'
import * as React from 'react'
import PageLayout from '../src/components/PageLayout'

const AboutPage: NextPage = () => {
  return (
    <PageLayout title="About">
      <div> About me</div>
    </PageLayout>
  )
}

export default AboutPage
