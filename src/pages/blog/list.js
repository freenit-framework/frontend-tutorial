import React from 'react'
import {
  Paper,
  Button,
  Avatar,
} from '@material-ui/core'
import { withStore } from 'freenit'

import Template from 'templates/default/detail'


const blogList = {
  data: [
    {
      id: 1,
      title: 'Monday',
      content: 'Blah Blah',
    },
    {
      id: 2,
      title: 'Some title',
      content: 'Blah Blah',
    },
    {
      id: 3,
      title: 'Hey',
      content: 'Blah Blah',
    },
  ],
  pages: 3,
  total: 16,
}


class BlogList extends React.Component {
  render() {
    console.log(this.props.store.resolution.detail.width)
    const blogListUi = blogList.data.map(blog => {
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
