import React from 'react'
import App from 'next/app'
import Layout from '../components/Layout'

// style
import 'antd/dist/antd.css';
import '../assets/style/global.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return  <Layout>
        <Component {...pageProps} />
    </Layout>
  }
}

export default MyApp