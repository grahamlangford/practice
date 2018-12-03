import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/index'

class CommentBox extends Component {
  state = { comment: '' }

  handleChange = e => {
    this.setState({ comment: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.saveComment(this.state.comment)

    this.setState({ comment: '' })
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button id="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </Fragment>
    )
  }
}

export default connect(
  null,
  actions
)(CommentBox)
