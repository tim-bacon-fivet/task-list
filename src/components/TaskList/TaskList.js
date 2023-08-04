import TaskItem from '@/components/TaskItem';
import styles from './TaskList.module.css';

function TaskList({ tasks, dispatch, editingId }) {
    const incompleteTasks = tasks.filter(t => !t.complete);
    const completeTasks = tasks.filter(t => t.complete);
    return (
        <>
            <ul className={styles.list}>
                {incompleteTasks.map(({ task, id }) => {
                    return (
                        <TaskItem
                            key={id}
                            id={id}
                            task={task}
                            dispatch={dispatch}
                            beingEdited={editingId === id}
                        />
                    );
                })}
            </ul>
            {completeTasks.length > 0 && (
                <>
                    <hr className={styles.divider} />
                    <h2 className={styles.completeHeading}>
                        Complete ({completeTasks.length})
                    </h2>
                    <ul className={styles.list}>
                        {completeTasks.map(({ task, id, complete }) => {
                            return (
                                <TaskItem
                                    key={id}
                                    id={id}
                                    task={task}
                                    dispatch={dispatch}
                                    beingEdited={editingId === id}
                                    complete={complete}
                                />
                            );
                        })}
                    </ul>
                </>
            )}
        </>
    );
}

export default TaskList;
