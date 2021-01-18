import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { postUpdated, selectPostById } from './postsSlice'

export const EditPostForm = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) => selectPostById(state, postId))

  const [formData, setFormData] = useState({
    id: postId,
    title: post.title,
    content: post.content
  })

  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = ({ target: { value, name } }) =>
    setFormData({ ...formData, [name]: value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.title && formData.content) {
      dispatch(postUpdated(formData))
      history.push(`/posts/${postId}`)
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="title"
          placeholder="What's on your mind?"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          name="content"
          id="postContent"
          value={formData.content}
          onChange={handleChange}
        ></textarea>
        <button>Save Post</button>
      </form>
    </section>
  )
}
