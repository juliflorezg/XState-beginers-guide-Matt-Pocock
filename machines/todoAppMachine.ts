import { createMachine } from 'xstate'
export const todosMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAsD2A3MAnABAWwEMBjZASwDswA6c1AFxzUy0gGIBZAeQFUBlAUU4A1fgCUA2gAYAuolAAHVLFJ1SqcnJAAPRAFoAbAA4ANCACeegEwBWKgHYALAE4nhgIz6AzDYeGnbgF8A0yZsfGIySipQlggOHgEeABUpWSQQRWVVdU0dBD8qQ2snTztrUwsEXQd9KmcXdy8fP0Cg01oIOE0Y8JIKME1MlTUNdLzdN09PCr03R3t6xu9rXyc2kB7CPqiYyEGlYZyxxGtLGYRJqmtJG7dDT31HazdJNeCNjDCtyOpaBl2IPssiNcnoiuddIZDFRLIsPMtVq0gkA */

  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2FUAIC2BDAxgBYCWAdmAHQAyquEZUmAKuqrAMQsayYA2tESAG0ADAF1EoAA5tiyYqlKSQAD0QBGABwiANCACeiALQBmAL5m9aDDgIly1AQ2asONOs+ttMAM1zFeYXFlGVg5BSUkVWN1AE4AFgoANnjNeJMAdgBWPUMEACYRC0sQUnQ4ZS9bIjIwENl5RWU1BCN8rKTk1PTs3Jis8xKqvBqHd3pSRi42erDGyNAWnINjJKyKLIsrVmr7SmmecchZ8KaolvUs2IoTLMuk9r6ES-UKdpERExE77IzNdXyWxAwzstUcHkmmC8PDAACdYahYSd5s1jIVNF00pllnl1PFEu9Pt91L9-oDikA */
  createMachine(
    {
      id: 'todo machine',
      initial: 'Loading Todos',
      schema: {
        events: {} as
          | { type: 'Todos loaded'; todos: string[] }
          | { type: 'Loading todos failed'; errorMessage: string },
      },
      tsTypes: {} as import('./todoAppMachine.typegen').Typegen0,
      states: {
        'Loading Todos': {
          on: {
            'Todos loaded': {
              target: 'Todos Loaded',
              actions: 'consoleLogTodos',
            },
            'Loading todos failed': 'Loading todos error',
          },
        },

        'Todos Loaded': {},
        'Loading todos error': {},
      },
    },
    {
      actions: {
        consoleLogTodos: (context, event) => {
          alert(JSON.stringify(event.todos))
        },
      },
    }
  )
