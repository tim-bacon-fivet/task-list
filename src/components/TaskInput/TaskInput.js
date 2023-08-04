import { Plus } from 'react-feather';
import styles from './TaskInput.module.css';

function TaskInput({ dispatch, value, isEditing }) {
    const handleSubmit = event => {
        event.preventDefault();
        if (isEditing) {
            dispatch({ type: 'update-task-in-list' });
        } else {
            dispatch({ type: 'add-task-to-list' });
        }
    };

    const handleTaskChange = event => {
        dispatch({ type: 'new-task-content', task: event.target.value });
    };

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Buy tea'
                className={styles.input}
                value={value}
                onChange={handleTaskChange}
            />
            <button className={styles.button}>
                <Plus />
                {isEditing ? 'Update' : 'Add'} Task
            </button>
        </form>
    );
}

export default TaskInput;
