import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Pages
import {
  Auth,
  NoPage,
  Profile,
  rest,
} from 'freenit'
import Dashboard from 'pages/dashboard'
import Landing from 'pages/landing'
import Role from 'pages/role'
import User from 'pages/user'
import Blog from 'pages/blog'


const API_ROOT = '/api/v0'


const Routing = () => {
  window.rest = rest(API_ROOT)
  window.rest.API_ROOT = API_ROOT
  return (
    <Switch>
      <Route exact path="/" component={Landing.detail} />
      <Route exact path="/blogs" component={Blog.List} />
      <Route exact path="/blogs/:page" component={Blog.List} />
      <Route exact path="/blog/:slug" component={Blog.Detail} />
      <Route exact path="/confirm/:token" component={Auth.confirm} />
      <Route exact path="/dashboard" component={Dashboard.detail} />
      <Route exact path="/login" component={Auth.login} />
      <Route exact path="/profile" component={Profile.detail} />
      <Route exact path="/register" component={Auth.register} />
      <Route exact path="/reset" component={Auth.reset} />
      <Route exact path="/reset/:token" component={Auth.changePassword} />
      <Route exact path="/role/:id" component={Role.detail} />
      <Route exact path="/roles" component={Role.list} />
      <Route exact path="/roles/:page" component={Role.list} />
      <Route exact path="/user/:id" component={User.detail} />
      <Route exact path="/users" component={User.list} />
      <Route exact path="/users/:page" component={User.list} />
      <Route path="*" component={NoPage.Detail} />
    </Switch>
  )
}


export default Routing
