import React from 'react'
import { mount } from 'enzyme'

import Root from '../../Root'
import CommentBox from '../CommentBox'

let wrap

beforeEach(() => {
  wrap = () =>
    mount(
      <Root>
        <CommentBox />
      </Root>
    )
})

it('has a text area and two buttons', () => {
  const wrapper = wrap()

  expect(wrapper.find('textarea').length).toEqual(1)
  expect(wrapper.find('button').length).toEqual(2)
})

describe('the text area', () => {
  let wrapper
  beforeEach(() => {
    wrapper = wrap()

    wrapper
      .find('textarea')
      .simulate('change', { target: { value: 'new comment' } })
    wrapper.update()
  })

  it('allows users to edit it', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment')
  })

  it('when form is submitted, text area is emptied', () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => {} })

    wrapper.update()
    expect(wrapper.find('textarea').prop('value')).toEqual('')
  })
})
