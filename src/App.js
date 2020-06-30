import React, {useState} from 'react';
import {connect} from "react-redux";

function App(props) {
    const [todo, setTodo] = useState('');

    const addTodo = () => {
        props.addTodo(todo);
        setTodo('');
    };

    return (
        <div className="App">
            <input type='text' value={todo} onChange={e => setTodo(e.target.value)}/>
            <button onClick={addTodo}>Add Task</button>
            {props.todos.map(el => <li key={el.title}>{el.title}</li>)}
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch({type: 'ADD_TODO', payload: todo}),
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
