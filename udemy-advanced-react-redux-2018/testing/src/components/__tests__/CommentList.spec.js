import React from 'react'
import { mount } from 'enzyme'

import Root from '../../Root'
import CommentList from '../CommentList'

let wrap
beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  }
  wrap = () =>
    mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    )
})

it('creates one li per comment', () => {
  const wrapper = wrap()

  expect(wrapper.find('li').length).toEqual(2)
})

it('shows text for each comment', () => {
  const wrapper = wrap()

  expect(wrapper.render().text()).toContain('Comment 1')
  expect(wrapper.render().text()).toContain('Comment 2')
})
