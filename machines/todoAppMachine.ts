import { assign, createMachine } from 'xstate'
export const todosMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAsD2A3MAnABAWwEMBjZASwDswA6c1AFxzUy0gGIBZAeQFUBlAUU4A1fgCUA2gAYAuolAAHVLFJ1SqcnJAAPRAFoAbAA4ANCACeegEwBWKgHYALAE4nhgIz6AzDYeGnbgF8A0yZsfGIySipQlggOHgEeABUpWSQQRWVVdU0dBD8qQ2snTztrUwsEXQd9KmcXdy8fP0Cg01oIOE0Y8JIKME1MlTUNdLzdN09PCr03R3t6xu9rXyc2kB7CPqiYyEGlYZyxxGtLGYRJqmtJG7dDT31HazdJNeCNjDCtyOpaBl2IPssiNcnoiuddIZDFRLIsPMtVq0gkA */

  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2FUAIC2BDAxgBYCWAdmAHQAyquEZUmAKuqrAMQbkVkBuqAa0poMOAiW406DZq1gI+qfLmTFUpANoAGALradiUAAc2xVesMgAHogC0AZgAsWigFYA7FtcBOAGzend3cAJl8AGhAATzsARnsKR0dgxxDfOPstGJitXwBfXIiRLDwiMkopelJGFgwOMAAnetR6iiMAGxUAM2bsCiKxUslaSuq5BVJ+ZXNNXX1LE1gzNVJLGwRbOO8EnNcnR0DUiOj10IAON0dT729L3y1TkPzC1gGJShq2TArIdgBherAKjAmHIAHc5kgQAslhZIWtbKdzt5gu57L4fKd0cFgkdEMF7FtXKd7KcYu5fASYsFTlp7E8QP0Sm8KB9YF9hj8ACJgNpgZDAooQ4ymaarOyOAIUKlnJI5VGOGLhKJ4gkUe4kskU7xU9zeemM8RlCj-QGqKogsCgzBFCgAZUIqFBMm69WwmDIRgArsh2AAxHru0he5CYIi4KqQIVQkXLMUIfHBCj+MleXZpK43XEIIJq4KuO5omIpbwY-UvJlGk0qGRg62sO0Op3ml1uj3e9i2z0AI2wZij0NFcMQrh8UquRe87glIScWZiNIo2vcMSJiPsK-n7jLogr3CrZsYtZtttwvBkRU46koiiEfXLhr3AOr5qP9ZPZ-NRXGk2r6n0-ZjWFQDWTwthibwtGXakpxLbEsw2FEKF1U4fF2Vwi3RItt2KB9KH3GtLTrDA7VPc9WHYBomhadouh6O8d1w40nwPC0rWPUjP1Yb8lF-GY9F0eZAJWIcEFcak1SSFEEwyUJvCzDJfASDIi3sZddmJfNsNeI1uV5Fjj0bZ0AzbH1-VdQNg1DQhwxgCAAMWQdgNiRJE11fNEh8ddMnsLMkniNMAi0PN3Exa4tN3ShdL5MjiPtR0jPMkyO27XtkHsmFhKc9YsjRNUtHy4IgtCCl7izalFN8SrfBCRx-Alew6QKBl70GSKeWizjiKi-kiNQS9uBvYQWuZbqYtQChuoFLjFCmZZ-wEyEB1jEStCzLRwsY0bOvGybeooxpmlaDpkBbeicNaib2v0+tdq-GbePmgxFqEuMEQ8CgGoa1xIOuLI4OVdZKqTKrfBpZJSX2RqmtIdA4EsA1WsEhzlqyjZ1KQktfA8gJsjieD7HzCSMyJWlCy3JqEeZCoZFZJGMtehrHEXU5ap8fYUkOAHbDzRTIOSex8TuB5gg2i7WXZOhIDpxzrDsdctm8Fn0RuA5QjK1UiQ1clKRRSdRap4YxrZSjmmllHZYQLJFKJbInGxEctGcHyueSdwPuxfZBfuEJaX1ytmIItjWDNoCLfnJnk08EdCwzRx4OyBIpwJZcMx2Kk-cfU1A96ht4ubYyg29EPMotgXE0SEtwMxFIR1cOdkSTRxdhLEm83Q1wM7wgOX0I9iP0YIpi7jTxXPuAJx+XVTTjnEkKExGkk9pKksc7y69LGoeRI2CUXDcrGm5x7z49cJnFSqq5qoyZwRYp4adKusbc6bRgWwsovnuR0P4T++JiUKycT5ZAeM7Y4iRFKhCcAEbE9wCyry2gPG6V0poYE3qjaU5dFaomxEEMG7g5xXDVH4U42IbgSkVDEfI+QgA */
  createMachine(
    {
      tsTypes: {} as import('./todoAppMachine.typegen').Typegen0,
      id: 'todo machine',
      initial: 'Loading Todos',
      schema: {
        events: {} as  //   | { type: 'Loading todos failed'; errorMessage: string }, //   | { type: 'Todos loaded'; todos: string[] }
          | { type: 'Create new' }
          | { type: 'Form input changed'; value: string }
          | { type: 'Submit' }
          | { type: 'Delete todo' },

        services: {} as {
          loadTodos: {
            data: string[]
          }
          saveTodo: {
            data: void
          }
          deleteTodo: {
            // data: string[]
            data: void
          }
        },
      },
      context: {
        todos: [] as string[],
        errorMessage: undefined as string | undefined,
        createNewTodoFormInput: '',
        todoToDelete: undefined as string | undefined,
      },
      states: {
        'Loading Todos': {
          //this invoke is for services machine will call on this state
          invoke: {
            src: 'loadTodos',
            onDone: { target: 'Todos Loaded', actions: 'assignTodosToContext' },
            onError: {
              target: 'Loading todos error',
              actions: 'assignErrorToContext',
            },
          },
        },

        'Todos Loaded': {
          on: {
            'Create new': 'Creating new todo',
            'Delete todo': 'Deleting todo',
          },
        },

        'Loading todos error': {},

        'Creating new todo': {
          initial: 'Showing form input',
          states: {
            'Showing form input': {
              on: {
                'Form input changed': {
                  target: 'Showing form input',
                  actions: 'assignFormInputToContext',
                  internal: true,
                },

                Submit: 'Saving todo',
              },
            },

            'Saving todo': {
              invoke: {
                src: 'saveTodo',
                onError: {
                  target: 'Showing form input',
                  actions: 'assignErrorToContext',
                },
                onDone: '#todo machine.Loading Todos',
              },
            },
          },
        },

        'Deleting todo': {
          initial: 'Showing form input',
          states: {
            'Showing form input': {
              on: {
                'Form input changed': {
                  target: 'Showing form input',
                  actions: 'saveTodoToDeleteInContext',
                  internal: true,
                },

                Submit: 'Delete todo',
              },
            },

            'Delete todo': {
              invoke: {
                src: 'deleteTodo',
                onError: {
                  target: 'Showing form input',
                  actions: 'assignErrorToContext',
                },
                onDone: {
                  target: '#todo machine.Loading Todos',
                },
              },
            },
          },
        },
      },
    },
    {
      actions: {
        // consoleLogTodos: (context, event) => {
        //   alert(JSON.stringify(event.todos))
        // },
        //* here will use the assign function to assign a value to a element in the context
        assignTodosToContext: assign((context, event) => {
          console.log({ context })
          // setTimeout(() => {
          //   console.log({ context })
          // }, 1000)
          return {
            todos: event.data,
          }
        }),
        assignErrorToContext: assign((context, event) => {
          return {
            //* here we have to cast the data as an Error bc TS doesn't recognize its type, then we can go into its properties an extract message
            errorMessage: (event.data as Error).message,
          }
        }),
        assignFormInputToContext: assign((context, event) => {
          return {
            createNewTodoFormInput: event.value,
          }
        }),
        saveTodoToDeleteInContext: assign((context, event) => {
          return {
            todoToDelete: event.value,
          }
        }),
      },
    }
  )
