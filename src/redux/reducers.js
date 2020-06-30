//Reducer todos
const initialState = {
    todos: [{
        title: 'First Todo',
        done: true
    }, {
        title: 'Second Todo',
        done: false
    }]
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, {title: action.payload, done: false}]
            }
        default:
            return state
    }
};

export default todos;
