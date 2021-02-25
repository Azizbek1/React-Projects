export const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case 'todo/add': {
      return { ...state, todos: [payload, ...state.todos] }
    }
    case 'todo/complete': {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, completed: !todo.completed } : todo
        )
      }
    }
    case 'todo/remove': {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload)
      }
    }
    case 'todo/edit': {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, edit: !todo.edit } : todo
        )
      }
    }
    case 'todo/update': {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, text: payload.text } : todo
        )
      }
    }
    case 'filter/all': {
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, show: true }))
      }
    }
    case 'filter/active': {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.completed ? { ...todo, show: false } : { ...todo, show: true }
        )
      }
    }
    case 'filter/completed': {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.completed ? { ...todo, show: true } : { ...todo, show: false }
        )
      }
    }
    case 'control/markAllCompleted': {
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: true }))
      }
    }
    case 'control/clearCompleted': {
      return { ...state, todos: state.todos.filter((todo) => !todo.completed) }
    }
    default:
      return state
  }
}
