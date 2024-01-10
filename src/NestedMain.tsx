import React from 'react'

export default function NestedMain(props: {children? : React.ReactNode}) {
  return (
    <div>{props.children}</div>
  )
}
