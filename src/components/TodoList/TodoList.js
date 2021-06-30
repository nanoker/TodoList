import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const TodoList = ({updateListOfTodos,existingListOfTodos}) => {
    const handleKeyDown = (event) => {
        const todoObject = {
            id: uuidv4(),
            title: event.target.value,
            completed: false
        }
        if(event.keyCode === 13) {
            updateListOfTodos([...existingListOfTodos, todoObject]);
        axios.post('http://localhost:4000/listOfTodos', todoObject);
        }
    }
        return(
            <form>
                <input className="todo-input" onKeyDown={handleKeyDown} placeholder="put something"></input>
            </form>
        )
};

export default TodoList;
   