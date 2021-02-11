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
    editImage: false,
    title: '',
    image: '',
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

  openImageEdit = () => {
    this.setState({ editImage: true })
  }

  closeImageEdit = () => {
    this.setState({
      editImage: false,
      image: '',
    })
  }

  handleImageChange = (event) => {
    this.setState({ image: event.target.value })
  }

  editImage = async () => {
    const { blog, notification } = this.props.store
    if (this.state.image !== '') {
      const { slug } = this.props.match.params
      const result = await blog.edit(slug, { image: this.state.image })
      if (!result.ok) {
        const error = errors(result)
        notification.show(error.message)
      }
      this.closeImageEdit()
    } else {
      notification.show('Image URL can not be empty!')
    }
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
          <DialogTitle>Edit Title</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter new blog post title
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
    const imageUI = auth.detail.ok
      ? (
        <Dialog open={this.state.editImage} onClose={this.closeImageEdit}>
          <DialogTitle>Edit Image</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter new image URL
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="image"
              label="Image"
              fullWidth
              onChange={this.handleImageChange}
              value={this.state.image}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeImageEdit} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.editImage} color="primary">
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
            {imageUI}
          </div>
          <img
            alt="something"
            style={{ height: 200, float: "left", marginRight: 10 }}
            src={blog.image}
            onClick={this.openImageEdit}
          />
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
