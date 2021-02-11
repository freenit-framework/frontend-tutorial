import React from 'react'
import { Link } from 'react-router-dom'
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  Paper,
  TextField,
} from '@material-ui/core'
import {
  errors,
  withStore,
} from 'freenit'
import AddIcon from '@material-ui/icons/Add'

import Template from 'templates/default/detail'


class BlogList extends React.Component {
  state = {
    create: false,
    title: '',
  }

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

  openCreate = async () => {
    this.setState({ create: true })
  }

  closeCreate = async () => {
    this.setState({ create: false, title: '' })
  }

  editTitle = (event) => {
    this.setState({ title: event.target.value })
  }

  createPost = async () => {
    const data = {
      title: this.state.title,
      content: this.state.title,
      published: true,
      image: 'https://tilda.center/static/images/logo.png',
    }
    const { blog, history, notification } = this.props.store
    const response = await blog.create(data)
    if (!response.ok) {
      const error = errors(response)
      notification.show(error.message)
    } else {
      history.push(`/blog/${response.slug}`)
    }
    this.closeCreate()
  }

  render() {
    const { auth, blog } = this.props.store
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
    const createUI = auth.detail.ok
      ? (
        <Fab
          color="primary"
          aria-label="add"
          onClick={this.openCreate}
        >
          <AddIcon />
        </Fab>
      )
      : null
    return (
      <Template>
        <h1 style={{ marginLeft: 20 }}>
          Straight from the Hackers' Kitchen
        </h1>
        {createUI}
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
        <Dialog open={this.state.create} onClose={this.closeCreate}>
          <DialogTitle id="form-dialog-title">Create Blog Post</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter new name of the title
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="title"
              label="Title"
              fullWidth
              onChange={this.editTitle}
              value={this.state.title}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeCreate} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.createPost} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Template>
    )
  }
}


export default withStore(BlogList)
