import React from 'react'
import PageLayout from './src/layouts/page-layout'
import './src/styles/global.css'
import './src/styles/styles.css'

export const wrapPageElement = ({ element }) => {
  return <PageLayout>{element}</PageLayout>
}
