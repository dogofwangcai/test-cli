/* eslint-disable no-unused-vars */
import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { renderRoutes } from 'react-router-config'

const { Header, Content, Footer, Sider } = Layout

export default function Root(props) {
  const { route } = props
  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <Menu theme="dark" mode="inline">
          <Menu.Item></Menu.Item>
        </Menu>
      </Sider>
      <div>{renderRoutes(route.routes)}</div>
    </Layout>
  )
}
