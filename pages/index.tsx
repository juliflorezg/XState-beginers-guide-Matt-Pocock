import { useMachine } from '@xstate/react'
import { NextPage } from 'next'
import React from 'react'
// import { myMachine } from '../machines/myFirstMachine'
import { todosMachine } from '../machines/todoAppMachine'

const todos = new Set<string>(['do laundry', 'take bins out'])

export const Home: NextPage = () => {
  const [state, send] = useMachine(todosMachine, {
    services: {
      loadTodos: async () => {
        // throw new Error('noooooooooooooo')
        return Array.from(todos)
      },
      saveTodo: async (context, event) => {
        todos.add(context.createNewTodoFormInput)
      },
      deleteTodo: async (context, event) => {
        // const newTodosList = context.todos.filter(todo => todo !== context.todoToDelete)

        // return newTodosList

        todos.delete(context.todoToDelete as string)
      },
    },
  })

  return (
    <>
      <div>
        <pre>{JSON.stringify(state.value)}</pre>
        <pre>{JSON.stringify(state.context)}</pre>
        <div>
          {state.matches('Todos Loaded') && (
            <>
              <button
                onClick={() => {
                  send({ type: 'Create new' })
                }}
              >
                Create new
              </button>
              <button
                onClick={() => {
                  send({
                    type: 'Delete todo',
                  })
                }}
              >
                Delete a todo
              </button>
            </>
          )}
          {state.matches('Deleting todo.Showing form input') && (
            <form
              onSubmit={e => {
                e.preventDefault()
                send({
                  type: 'Submit',
                })
              }}
            >
              <input
                type="text"
                onChange={e => {
                  send({ type: 'Form input changed', value: e.target.value })
                }}
              />
            </form>
          )}
          {state.matches('Creating new todo.Showing form input') && (
            <form
              onSubmit={e => {
                e.preventDefault()
                send({
                  type: 'Submit',
                })
              }}
            >
              <input
                type="text"
                onChange={e => {
                  send({ type: 'Form input changed', value: e.target.value })
                }}
              />
            </form>
          )}
        </div>
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
