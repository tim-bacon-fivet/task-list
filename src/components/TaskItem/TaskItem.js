import { Trash2 } from 'react-feather';
import styles from './TaskItem.module.css';

const iconSize = 28;

function TaskItem({ task, id, dispatch, beingEdited, complete }) {
    const handleItemClicked = () => {
        dispatch({ type: 'start-editing-task', id });
    };

    const handleComplete = () => {
        dispatch({ type: 'toggle-complete', id });
    };

    const handleDelete = () => {
        dispatch({ type: 'delete-task', id });
    };

    return (
        <li
            style={{ '--color': beingEdited ? 'hsl(0deg 0% 75%)' : 'default' }}
            className={styles.item}
        >
            <input
                type='checkbox'
                onChange={handleComplete}
                checked={complete}
            />
            <p
                onClick={handleItemClicked}
                className={styles.task}
                style={{
                    '--text-decoration': complete ? 'line-through' : undefined,
                    '--color': complete ? 'hsl(0deg 0% 75%)' : 'default',
                }}
            >
                {task}
            </p>
            <button
                className={styles.removeButton}
                style={{ '--size': iconSize + 'px' }}
                onClick={handleDelete}
            >
                <Trash2 size={iconSize} />
            </button>
        </li>
    );
}

export default TaskItem;
