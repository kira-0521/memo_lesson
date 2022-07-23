import { useCallback } from 'react'
import { useState } from 'react'
import './App.css'
import { Child } from './components/Child'
import { useTestCb } from './hooks/useTestCb'

function App() {
  const [count, setCount] = useState(0)

  const testHook = useTestCb()

  const cbTest = useCallback(() => {
    console.log('called cbTest')
  }, [])

  return (
    <div className='App'>
      <span>count: {count}</span>
      <button
        onClick={() => setCount(count + 1)}
        style={{ marginLeft: '30px' }}>
        カウントアップ
      </button>
      <Child fn={cbTest} testCb2={testHook.testCb2} />
    </div>
  )
}

export default App
