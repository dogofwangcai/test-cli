/* eslint-disable react/display-name */
import React from 'react'
import Login from 'pages/Login'
import Root from 'pages/Root'
import Home from 'pages/Home'
import Menu from 'pages/System/Menu'
import { Redirect } from 'react-router-dom'

export default [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/login"></Redirect>,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    component: Root,
    routes: [
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/system/menu',
        component: Menu,
      },
    ],
  },
]
