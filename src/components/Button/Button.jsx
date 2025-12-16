import React from 'react'

export function Button({content, width, background, height, borderRadius}) {
  return (
    <button style={{width:width, background: background, height:height, borderRadius:borderRadius}}>{content}</button>
  )
}
