import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
    const [selectedTask, setSelectedTask] = useState(null);

    const handleEdit = (task) => setSelectedTask(task);

    const handleSave = () => setSelectedTask(null);

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm selectedTask={selectedTask} onSave={handleSave} />
            <TaskList onEdit={handleEdit} />
        </div>
    );
}

export default App;