// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true
  internalEvents: {
    'done.invoke.todo machine.Creating new todo.Saving todo:invocation[0]': {
      type: 'done.invoke.todo machine.Creating new todo.Saving todo:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.todo machine.Deleting todo.Delete todo:invocation[0]': {
      type: 'done.invoke.todo machine.Deleting todo.Delete todo:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.todo machine.Loading Todos:invocation[0]': {
      type: 'done.invoke.todo machine.Loading Todos:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'error.platform.todo machine.Creating new todo.Saving todo:invocation[0]': {
      type: 'error.platform.todo machine.Creating new todo.Saving todo:invocation[0]'
      data: unknown
    }
    'error.platform.todo machine.Deleting todo.Delete todo:invocation[0]': {
      type: 'error.platform.todo machine.Deleting todo.Delete todo:invocation[0]'
      data: unknown
    }
    'error.platform.todo machine.Loading Todos:invocation[0]': {
      type: 'error.platform.todo machine.Loading Todos:invocation[0]'
      data: unknown
    }
    'xstate.init': { type: 'xstate.init' }
  }
  invokeSrcNameMap: {
    deleteTodo: 'done.invoke.todo machine.Deleting todo.Delete todo:invocation[0]'
    loadTodos: 'done.invoke.todo machine.Loading Todos:invocation[0]'
    saveTodo: 'done.invoke.todo machine.Creating new todo.Saving todo:invocation[0]'
  }
  missingImplementations: {
    actions: never
    delays: never
    guards: never
    services: 'deleteTodo' | 'loadTodos' | 'saveTodo'
  }
  eventsCausingActions: {
    assignErrorToContext:
      | 'error.platform.todo machine.Creating new todo.Saving todo:invocation[0]'
      | 'error.platform.todo machine.Deleting todo.Delete todo:invocation[0]'
      | 'error.platform.todo machine.Loading Todos:invocation[0]'
    assignFormInputToContext: 'Form input changed'
    assignTodosToContext: 'done.invoke.todo machine.Loading Todos:invocation[0]'
    saveTodoToDeleteInContext: 'Form input changed'
  }
  eventsCausingDelays: {}
  eventsCausingGuards: {}
  eventsCausingServices: {
    deleteTodo: 'Submit'
    loadTodos:
      | 'done.invoke.todo machine.Creating new todo.Saving todo:invocation[0]'
      | 'done.invoke.todo machine.Deleting todo.Delete todo:invocation[0]'
      | 'xstate.init'
    saveTodo: 'Submit'
  }
  matchesStates:
    | 'Creating new todo'
    | 'Creating new todo.Saving todo'
    | 'Creating new todo.Showing form input'
    | 'Deleting todo'
    | 'Deleting todo.Delete todo'
    | 'Deleting todo.Showing form input'
    | 'Loading Todos'
    | 'Loading todos error'
    | 'Todos Loaded'
    | {
        'Creating new todo'?: 'Saving todo' | 'Showing form input'
        'Deleting todo'?: 'Delete todo' | 'Showing form input'
      }
  tags: never
}
