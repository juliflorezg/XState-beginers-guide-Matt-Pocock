import { assign, createMachine } from 'xstate'
export const todosMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAsD2A3MAnABAWwEMBjZASwDswA6c1AFxzUy0gGIBZAeQFUBlAUU4A1fgCUA2gAYAuolAAHVLFJ1SqcnJAAPRAFoAbAA4ANCACeegEwBWKgHYALAE4nhgIz6AzDYeGnbgF8A0yZsfGIySipQlggOHgEeABUpWSQQRWVVdU0dBD8qQ2snTztrUwsEXQd9KmcXdy8fP0Cg01oIOE0Y8JIKME1MlTUNdLzdN09PCr03R3t6xu9rXyc2kB7CPqiYyEGlYZyxxGtLGYRJqmtJG7dDT31HazdJNeCNjDCtyOpaBl2IPssiNcnoiuddIZDFRLIsPMtVq0gkA */

  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2FUAIC2BDAxgBYCWAdmAHQAyquEZUmAKuqrAMQbkVkBuqAa0poMOAiW406DZq1gI+qfLmTFUpANoAGALradiUAAc2xVesMgAHogCMAdnsUAbLeeOAHAFYALPYDMXs7+HgA0IACeiAC0Pl4UPv7O3lr+AEzOWu4AnBkAvnnhIlh4RGSUUvSkjCwYHGAATg2oDRRGADYqAGYt2BTFYmWStFU1cgqk-Mrmmrr6liawZmqkljYI0bbZPi4+Hon2XuFRCGlaBYUgpOhwlgOlEmALpjNrMWlBu-v+h8fv9h4KNkPP5srktHsvEE0gUiqxBo9qCMZLU2M8lq8kNYYkkKGkMml-P5bD4fM5so4-hstrYEiCwT4tN5srYgj5YSB7uJyhRUbBMJVIOjlhYsetWdkKIFWc4PlTWbSPlpUlovA4vADbDDLlyhhVkdVMMV+Y1mg1hZjQOtomdAc49gcjpE7KS8V5lf5VerNdqCkA */
  createMachine(
    {
      tsTypes: {} as import('./todoAppMachine.typegen').Typegen0,
      id: 'todo machine',
      initial: 'Loading Todos',
      schema: {
        // events: {} as
        //   | { type: 'Todos loaded'; todos: string[] }
        //   | { type: 'Loading todos failed'; errorMessage: string },
        services: {} as {
          loadTodos: {
            data: string[]
          }
        },
      },
      context: {
        todos: [] as string[],
        errorMessage: undefined as string | undefined,
      },
      states: {
        'Loading Todos': {
          invoke: {
            src: 'loadTodos',
            onDone: { target: 'Todos Loaded', actions: 'assignTodosToContext' },
            onError: {
              target: 'Loading todos error',
              actions: 'assignErrorToContext',
            },
          },
        },

        'Todos Loaded': {},
        'Loading todos error': {},
      },
    },
    {
      actions: {
        // consoleLogTodos: (context, event) => {
        //   alert(JSON.stringify(event.todos))
        // },
        assignTodosToContext: assign((context, event) => {
          return {
            todos: event.data,
          }
        }),
        assignErrorToContext: assign((context, event) => {
          return {
            errorMessage: (event.data as Error).message,
          }
        }),
      },
    }
  )
