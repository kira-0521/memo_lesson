import React from 'react'
import { memo } from 'react'

// 1. memo
// 2. useCallback

export const Child = memo(({ fn }) => {
  console.log('render child component')
  return (
    <div style={{ marginTop: '30px' }}>
      Child
      <button onClick={() => fn()} style={{ marginLeft: '30px' }}>
        call fn
      </button>
    </div>
  )
})
