import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          Laboris qui deserunt tempor et ullamco eu officia qui laborum aliquip
          aliqua cillum. Eu labore do et enim ex velit aute ex quis elit. Dolor
          sint elit in est aute laborum ullamco. Minim ullamco mollit magna do
          commodo aliquip mollit culpa pariatur officia consequat labore. Aute
          cupidatat duis velit esse ullamco quis nostrud exercitation
          adipisicing ullamco ut velit.
        </p>
      </div>
    </Layout>
  )
}

export default blog
