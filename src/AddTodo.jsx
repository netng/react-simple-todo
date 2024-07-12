import { 
    useRef,
    useState,
} from 'react';

import PropTypes from 'prop-types';
import { createTodo } from './todos.js';

export default function AddTodo({ onClick }) {
    const textRef = useRef(null);
    const [text, setText] = useState('');

    function handleAdd() {
        setText('');
        textRef.current.focus();
        return createTodo(text);
    }

    return (
        <div>
            <input
                ref={textRef}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => onClick(handleAdd())}>
                Tambahkan
            </button>
      </div>
    )
}

AddTodo.propTypes = {
    onClick: PropTypes.func,
}