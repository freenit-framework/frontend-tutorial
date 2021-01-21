export default class BlogStore {
  constructor(detail, list) {
    this.detail = detail[0]
    this.setDetail = detail[1]
    this.list = list[0]
    this.setList = list[1]
  }

  fetchAll = async (Page = 0, PerPage = 9) => {
    try {
      const response = await window.rest.get(
        '/blogs',
        { headers: { Page, PerPage } },
      )
      const result = {
        ...response.data,
        ok: true
      }
      this.setList(result)
      return result
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }

  fetch = async (id) => {
    try {
      const response = await window.rest.get(`/blogs/${id}`)
      const result = {
        ...response.data,
        ok: true
      }
      this.setDetail(result)
      return result
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }

  edit = async (id, data) => {
    try {
      const response = await window.rest.patch(`/blogs/${id}`, data)
      const result = {
        ...response.data,
        ok: true
      }
      this.setDetail(result)
      return result
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }

  create = async (data) => {
    try {
      const response = await window.rest.post('/blogs', data)
      const result = {
        ...response.data,
        ok: true
      }
      this.setDetail(result)
      return result
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }

  remove = async (id) => {
    try {
      const response = await window.rest.delete(`/blogs/${id}`)
      const result = {
        ...response.data,
        ok: true
      }
      this.setDetail(result)
      return result
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }
}
