'use client';

import MaxWidthContainer from '@/components/MaxWidthContainer';
import TaskInput from '@/components/TaskInput';
import TaskList from '@/components/TaskList';
import { produce } from 'immer';
import React from 'react';

const reducer = (state, action) => {
    return produce(state, draftState => {
        switch (action.type) {
            case 'new-task-content': {
                draftState.task = action.task;
                break;
            }
            case 'add-task-to-list': {
                draftState.tasks.unshift({
                    task: draftState.task,
                    id: crypto.randomUUID(),
                });
                draftState.task = '';
                break;
            }
            case 'start-editing-task': {
                draftState.task = state.tasks.find(
                    t => t.id === action.id
                ).task;
                draftState.editingId = action.id;
                break;
            }
            case 'update-task-in-list': {
                const index = state.tasks.findIndex(
                    t => t.id === state.editingId
                );
                draftState.tasks[index].task = state.task;
                draftState.task = '';
                draftState.editingId = null;
                break;
            }
            case 'toggle-complete': {
                const index = state.tasks.findIndex(t => t.id === action.id);
                draftState.tasks[index].complete = !state.tasks[index].complete;
                break;
            }
            case 'delete-task': {
                draftState.tasks = state.tasks.filter(t => t.id !== action.id);
                break;
            }
            default:
                break;
        }
    });
};

export default function Home() {
    const [state, dispatch] = React.useReducer(reducer, {
        task: '',
        tasks: [],
        editingId: null,
    });
    return (
        <MaxWidthContainer>
            <h1>Task List</h1>
            <TaskInput
                dispatch={dispatch}
                value={state.task}
                isEditing={state.editingId !== null}
            />
            <TaskList
                tasks={state.tasks}
                dispatch={dispatch}
                editingId={state.editingId}
            />
        </MaxWidthContainer>
    );
}
