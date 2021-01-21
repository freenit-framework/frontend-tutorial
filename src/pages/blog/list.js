import React from 'react'
import {
  Avatar,
  Button,
  Paper,
} from '@material-ui/core'
import {
  errors,
  withStore,
} from 'freenit'

import Template from 'templates/default/detail'


class BlogList extends React.Component {
  constructor(props) {
    super(props)
    this.fetch()
  }

  fetch = async () => {
    const { blog, notification } = this.props.store
    const result = await blog.fetchAll()
    if (!result.ok) {
      const error = errors(result)
      notification.show(error.message)
    }
  }

  render() {
    const { blog } = this.props.store
    const blogListUi = blog.list.data.map(blog => {
      return (
        <Paper key={blog.id} style={{ minHeight: 30, display: "flex" }}>
          <div style={{ height: 120, width: 120, backgroundImage: `url("${blog.image}")`, backgroundSize: "100% 100%", marginRight: 20 }} />
          <div>
            <h2>
              {blog.title}
            </h2>
            <p>
              {blog.content}
            </p>
          </div>
        </Paper>
      )
    })
    return (
      <Template>
        <h1 style={{ marginLeft: 20 }}>
          Straight from the Hackers' Kitchen
        </h1>
        <div style={{ padding: 20, display: "grid", gridTemplateColumns: "repeat(3, auto)", gridGap: 5 }}>
          {blogListUi}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Button variant="outlined" disabled>
            &lt;
          </Button>
          <Avatar style={{ marginLeft: 5, marginRight: 5 }}>
            1
          </Avatar>
          <Button variant="outlined">
            &gt;
          </Button>
        </div>
      </Template>
    )
  }
}


export default withStore(BlogList)
