import React from 'react'

export function Button({content, width}) {
  return (
    <button style={{width:width}}>{content}</button>
  )
}
