import React from 'react'
import {
  Role,
} from 'freenit'
import Template from 'templates/default/detail'


class RoleDetail extends React.Component {
  render() {
    return (
      <Template secure style={{}}>
        <Role.detail {...this.props} />
      </Template>
    )
  }
}


export default RoleDetail
