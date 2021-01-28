import React from 'react'
import { Link } from 'react-router-dom'
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
    this.fetch(props.match.params.page)
  }

  fetch = async (page = 0) => {
    const { blog, notification } = this.props.store
    const result = await blog.fetchAll(page)
    if (!result.ok) {
      const error = errors(result)
      notification.show(error.message)
    }
  }

  previous = () => {
    const { page } = this.props.match.params
    const { history } = this.props.store
    let previousPage = page ? Number(page) : 0
    previousPage -= 1
    if (previousPage > 0) { history.push(`/blogs/${previousPage}`) }
    else { history.push('/blogs/') }
  }

  next = () => {
    const { page } = this.props.match.params
    const { history } = this.props.store
    let nextPage = page ? Number(page) : 0
    nextPage += 1
    history.push(`/blogs/${nextPage}`)
  }

  componentDidUpdate(prevProps) {
    const { page } = this.props.match.params
    if (prevProps.match.params.page !== page) {
      this.fetch(page);
    }
  }

  render() {
    const { blog } = this.props.store
    const { page } = this.props.match.params
    const currentPage = page ? Number(page) : 0
    const blogListUi = blog.list.data.map(blog => {
      return (
        <Link key={blog.id} to={`/blog/${blog.slug}`}>
          <Paper style={{ minHeight: 30, display: "flex" }}>
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
        </Link>
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
          <Button
            variant="outlined"
            disabled={currentPage <= 0}
            onClick={this.previous}
          >
            &lt;
          </Button>
          <Avatar style={{ marginLeft: 5, marginRight: 5 }}>
            {currentPage}
          </Avatar>
          <Button
            variant="outlined"
            disabled={currentPage >= blog.list.pages - 1}
            onClick={this.next}
          >
            &gt;
          </Button>
        </div>
      </Template>
    )
  }
}


export default withStore(BlogList)
