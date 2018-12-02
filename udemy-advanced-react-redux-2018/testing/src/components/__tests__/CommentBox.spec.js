import React from 'react'
import { shallow } from 'enzyme'

import CommentBox from '../CommentBox'

let wrap

beforeEach(() => {
  wrap = () => shallow(<CommentBox />)
})

it('has a text area and a button', () => {
  const wrapper = wrap()

  expect(wrapper.find('textarea').length).toEqual(1)
  expect(wrapper.find('button').length).toEqual(1)
})

it('has a text area that users can type in', () => {
  const wrapper = wrap()

  wrapper
    .find('textarea')
    .simulate('change', { target: { value: 'new comment' } })

  wrapper.update()

  expect(wrapper.find('textarea').prop('value')).toEqual('new comment')
})
