import React, { useState, useEffect } from 'react';
import { createTask, updateTask } from '../api';

const TaskForm = ({ selectedTask, onSave }) => {
    const [task, setTask] = useState({ title: '', description: '' });

    useEffect(() => {
        if (selectedTask) setTask(selectedTask);
    }, [selectedTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const action = task.id ? updateTask(task.id, task) : createTask(task);
        action.then(() => {
            onSave();
            setTask({ title: '', description: '' });
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
            />
            <textarea
                placeholder="Description"
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default TaskForm;