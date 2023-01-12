import { useMachine } from '@xstate/react'
import { NextPage } from 'next'
import React from 'react'
import { myMachine } from '../machines/myFirstMachine'

export const Home: NextPage = () => {
  const [state, send] = useMachine(myMachine)

  return (
    <>
      <div>{JSON.stringify(state.value)}</div>
      <button
        onClick={() => {
          send('MOUSEOVER')
        }}
      >
        Hover
      </button>
      <button
        onClick={() => {
          send('MOUSEOUT')
        }}
      >
        Mouse out
      </button>
    </>
  )
}

export default Home
