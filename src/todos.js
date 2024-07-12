let nextId = 0;
let count = 0;

export function getVisibleTodos(todos, isActive) {
    console.log(`getVisibleTodos dipanggil sebanyak ${count++} times`);
    const activeTodos = todos.filter(todo => !todo.completed);
    const visibleTodos = isActive ? activeTodos : todos;
    return visibleTodos;
}

export function createTodo(text, completed = false) {
    return {
        id: nextId++,
        text,
        completed
    }
}

export const initialTodos = [
    createTodo('Beli apel', true),
    createTodo('Beli jeruk', true),
    createTodo('Beli wortel'),
]