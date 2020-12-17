import React, { useState } from 'react'

// Pages
import {
  Auth,
  Profile,
  Resolution,
  Role,
  Store,
  User,
  EmptyTemplate,
} from 'freenit'
import { withRouter } from 'react-router-dom'
import Blog from 'pages/blog'
import Landing from 'pages/landing'


export const data = {}


const Provider = (props) => {
  const store = {
    auth: new Auth.store(useState(Auth.initial.detail)),
    blog: new Blog.store(
      useState(Blog.initial.detail),
      useState(Blog.initial.list),
    ),
    history: props.history,
    landing: new Landing.store(useState(Landing.initial.detail)),
    notification: new EmptyTemplate.store(
      useState(EmptyTemplate.initial.detail),
    ),
    profile: new Profile.store(
      useState(Profile.initial.detail),
    ),
    resolution: new Resolution.store(useState(Resolution.initial.detail)),
    role: new Role.store(
      useState(Role.initial.detail),
      useState(Role.initial.list),
    ),
    user: new User.store(
      useState(User.initial.detail),
      useState(User.initial.list),
    ),
  }
  data.store = store
  return (
    <Store.Provider value={store}>
      {props.children}
    </Store.Provider>
  )
}


export const StoreProvider = withRouter(Provider)
