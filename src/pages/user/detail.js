import React from 'react'
import {
  User,
} from 'freenit'
import Template from 'templates/default/detail'


class UserDetail extends React.Component {
  render() {
    return (
      <Template secure style={{}}>
        <User.detail {...this.props} />
      </Template>
    )
  }
}


export default UserDetail
