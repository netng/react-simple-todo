import PropTypes from 'prop-types';

export default function ListTodo({ visibleTodos }) {
    return (
        <div>
            <ul>
                { visibleTodos.map(todo => (
                    <li key={todo.id}>
                        { 
                            todo.completed ? 
                                (<s>{todo.text}</s>) : 
                                (todo.text)
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

ListTodo.propTypes = {
    visibleTodos: PropTypes.array
}