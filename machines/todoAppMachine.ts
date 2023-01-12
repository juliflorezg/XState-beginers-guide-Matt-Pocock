import { assign, createMachine } from 'xstate'
export const todosMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAsD2A3MAnABAWwEMBjZASwDswA6c1AFxzUy0gGIBZAeQFUBlAUU4A1fgCUA2gAYAuolAAHVLFJ1SqcnJAAPRAFoAbAA4ANCACeegEwBWKgHYALAE4nhgIz6AzDYeGnbgF8A0yZsfGIySipQlggOHgEeABUpWSQQRWVVdU0dBD8qQ2snTztrUwsEXQd9KmcXdy8fP0Cg01oIOE0Y8JIKME1MlTUNdLzdN09PCr03R3t6xu9rXyc2kB7CPqiYyEGlYZyxxGtLGYRJqmtJG7dDT31HazdJNeCNjDCtyOpaBl2IPssiNcnoiuddIZDFRLIsPMtVq0gkA */

  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2FUAIC2BDAxgBYCWAdmAHQAyquEZUmAKuqrAMQbkVkBuqAa0poMOAiW406DZq1gI+qfLmTFUpANoAGALradiUAAc2xVesMgAHogC0AJgDMATgoA2ABwAWZ24Cs9l5+Hm5eWvYANCAAnnb2AOwUAIxe9s7OWj5uzh5a4QC++VEiWHhEZJRS9KSMLBgcYABOjaiNFEYANioAZq3YFCVi5ZK01bVyCqT8yuaauvqWJrBmaqSWNgi2jh4UAVoZCUEhYZExcR72FIHOfkmHQX77XoXFrEMSlHVsmFWQ7ADCjTAKjAmHIAHcFkgQEsVhZoRtbG5LvEtN5wvEjqFwlFYgh7PY-BRto40s54n4-F4fFo3C8QIMyh8KIDgaoamCwODMCUKABlQiocEyXqNbCYMhGACuyHYADE+hLSNLkJgiLgapAocZTLN1ogkklHMSqft4oSvEa-DlcQabsk-G54o5zZTqRk6fTSOg4JZGeIKotdat9Zt7B5Ep4sgEsV5bZtHNkKJibklcmnHrl4vT-cNKqMZF94NDYXqEXFHF4KPsDvFMcFsac8Q4k3W0o9Ag8njm3kyKhQiz9RpAg8sy6BEfYkq4axj68ccWd8YSKB4PKT0hSqTTPa9RH2RtIOSVYJgmi1GqO4Wty-ikokvG4n-5nClLfY3PGW0lqwSbuFqUpbsigZXsA24VkVBkCEeVYK9x2sRB-BNMJyQtK0bSXJItEjR1PExPIUhyPwe33cDKEg9lGBg3kBSFEVFUlGV4JDW8jR-Q1pzNKkMI8eM0jcZJ9hCAk3R3QpCiAA */
  createMachine(
    {
      tsTypes: {} as import('./todoAppMachine.typegen').Typegen0,
      id: 'todo machine',
      initial: 'Loading Todos',
      schema: {
        events: {} as  //   | { type: 'Loading todos failed'; errorMessage: string }, //   | { type: 'Todos loaded'; todos: string[] }
          | { type: 'Create new' }
          | { type: 'Form input changed'; value: string },
        services: {} as {
          loadTodos: {
            data: string[]
          }
        },
      },
      context: {
        todos: [] as string[],
        errorMessage: undefined as string | undefined,
        createNewTodoFormInput: '',
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
      },
    }
  )
