import React from 'react'
import {
  Avatar,
  Button,
  Paper,
} from '@material-ui/core'
import { withStore } from 'freenit'

import Template from 'templates/default/detail'


let id = 10


class BlogList extends React.Component {
  addBlogPost = () => {
    ++id
    const blogPost = {
      id,
      title: 'Added Blog Post',
      content: 'Generated once, abused all over the place',
    }
    const { blog } = this.props.store
    blog.setList({
      ...blog.list,
      data: [
        ...blog.list.data,
        blogPost,
      ]
    })
  }

  render() {
    const { blog } = this.props.store
    const blogListUi = blog.list.data.map(blog => {
      return (
        <Paper key={blog.id} style={{ minHeight: 30, display: "flex" }}>
          <div style={{ height: 120, width: 120, backgroundImage: "url(\"http://4.bp.blogspot.com/-v3JuijKnOrI/UBkuXara48I/AAAAAAAAF6k/sErkKUvi2oo/s1600/Beer_Wallpaper+(49).jpg\")", backgroundSize: "100% 100%", marginRight: 20 }} />
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
        <Button variant="outlined" onClick={this.addBlogPost}>
          Add Blog Post
        </Button>
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
