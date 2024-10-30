import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../api';

const TaskList = ({ onEdit }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then(response => setTasks(response.data));
    }, []);

    const handleDelete = (id) => {
        deleteTask(id).then(() => {
            setTasks(tasks.filter(task => task.id !== id));
        });
    };

    return (
        <div>
            <h3>Tasks</h3>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span>{task.title}</span>
                        <button onClick={() => onEdit(task)}>Edit</button>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;