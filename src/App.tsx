import React, { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([
        { id: '1', text: 'Покормить кота' },
        { id: '2', text: 'Вынести мусор' }
    ]);
    const [taskText, setTaskText] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value);
    };

    const handleAddTask = () => {
        if (!taskText.trim()) return;
        const newTask = {
            id: String(Date.now()), // Создаем уникальный ID на основе времени
            text: taskText
        };
        setTasks([...tasks, newTask]);
        setTaskText('');
    };

    const handleDeleteTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div>
            <h1>ToDo List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Введите задачу"
                    value={taskText}
                    onChange={handleChange}
                />
                <button onClick={handleAddTask}>Add</button>
            </div>
            <div>
                {tasks.map(task => (
                    <div key={task.id}>
                        <span>{task.text}</span>
                        <button onClick={() => handleDeleteTask(task.id)}>Удалить</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
