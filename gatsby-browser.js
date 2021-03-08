import React from 'react'
import PageLayout from './src/layouts/page-layout'
import './src/styles/global.css'

export const wrapPageElement = ({ element }) => {
  return <PageLayout>{element}</PageLayout>
}
