import { LayoutProps } from '@interfaces'
import React from 'react'

export function withLayout({ children }:LayoutProps) {
  return (
    <div>
      <h2>2323</h2>
      <div>{children}</div>
    </div>
  )
}
