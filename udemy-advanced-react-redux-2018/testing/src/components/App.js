import React, { Fragment } from 'react'

import CommentBox from './CommentBox'
import CommentList from './CommentList'

export default () => {
  return (
    <Fragment>
      <CommentBox />
      <CommentList />
    </Fragment>
  )
}
