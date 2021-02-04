import React from 'react'
import {
  errors,
  withStore,
} from 'freenit'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from '@material-ui/core'

import Template from 'templates/default/detail'


class BlogDetail extends React.Component {
  state = {
    editTitle: false,
    title: '',
  }

  constructor(props) {
    super(props)
    this.fetch()
  }

  fetch = async () => {
    const { blog, notification } = this.props.store
    const { slug } = this.props.match.params
    const result = await blog.fetch(slug)
    if (!result.ok) {
      const error = errors(result)
      notification.show(error.message)
    }
  }

  remove = async () => {
    const { blog, history, notification } = this.props.store
    const { slug } = this.props.match.params
    const result = await blog.remove(slug)
    if (!result.ok) {
      const error = errors(result)
      notification.show(error.message)
    } else {
      history.push('/blogs')
    }
  }

  showEditTitle = () => {
    const { blog } = this.props.store
    this.setState({
      editTitle: true,
      title: blog.detail.title,
    })
  }

  hideEditTitle = () => {
    this.setState({
      editTitle: false,
      title: '',
    })
  }

  editTitle = async () => {
    const { blog, notification } = this.props.store
    if (this.state.title !== '') {
      const { slug } = this.props.match.params
      const result = await blog.edit(slug, { title: this.state.title })
      if (!result.ok) {
        const error = errors(result)
        notification.show(error.message)
      }
      this.hideEditTitle()
    } else {
      notification.show('Title can not be empty!')
    }
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value })
  }

  render() {
    const blog = this.props.store.blog.detail
    const { auth } = this.props.store
    const deleteUI = auth.detail.ok
      ? (
        <Button
          color="secondary"
          onClick={this.remove}
        >
          X
        </Button>
      )
      : null
    const editUI = auth.detail.ok
      ? (
        <Dialog open={this.state.editTitle} onClose={this.hideEditTitle}>
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
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
              onChange={this.handleTitleChange}
              value={this.state.title}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.hideEditTitle} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.editTitle} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      )
      : null
    return (
      <Template>
        <div style={{ padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1
              style={{ textAlign: "center", margin: 1 }}
              onClick={this.showEditTitle}
            >
              {blog.title}
            </h1>
            {deleteUI}
          </div>
          <img alt="something" style={{ height: 200, float: "left", marginRight: 10 }} src={blog.image} />
          <div>
            {blog.content}
          </div>
        </div>
        {editUI}
      </Template>
    )
  }
}


export default withStore(BlogDetail)
