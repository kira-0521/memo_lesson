import React from 'react'
import { useCallback } from 'react'

export const useTestCb = () => {
  const testCb2 = useCallback(() => {
    console.log('call testCb2')
  }, [])

  return {
    testCb2,
  }
}
