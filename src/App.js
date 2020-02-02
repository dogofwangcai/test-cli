import React from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from 'configs/routes'

export default function App() {
  return <HashRouter>{renderRoutes(routes)}</HashRouter>
}
