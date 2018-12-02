import React from 'react'
import { shallow } from 'enzyme'

import App from '../App'
import CommentBox from '../CommentBox'
import CommentList from '../CommentList'

let wrap

beforeEach(() => {
  wrap = () => shallow(<App />)
})

it('shows a comment box', () => {
  const wrapper = wrap()

  expect(wrapper.find(CommentBox).length).toEqual(1)
})

it('shows a comment list', () => {
  const wrapper = wrap()

  expect(wrapper.find(CommentList).length).toEqual(1)
})
