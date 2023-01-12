import { useMachine } from '@xstate/react'
import { NextPage } from 'next'
import React from 'react'
// import { myMachine } from '../machines/myFirstMachine'
import { todosMachine } from '../machines/todoAppMachine'

export const Home: NextPage = () => {
  const [state, send] = useMachine(todosMachine, {
    services: {
      loadTodos: async () => {
        // throw new Error('noooooooooooooo')
        return ['do laundry', 'take bins out']
      },
    },
  })

  return (
    <>
      <div>
        <pre>{JSON.stringify(state.value)}</pre>
        <pre>{JSON.stringify(state.context)}</pre>
      </div>
      {/* <button
        onClick={() => {
          send({
            type: 'Todos loaded',
            todos: ['study xstate'],
          })
        }}
      >
        Todos loaded
      </button>
      <button
        onClick={() => {
          send({
            type: 'Loading todos failed',
            errorMessage: 'failure message',
          })
        }}
      >
        Todos failed
      </button> */}
    </>
  )
}

export default Home
