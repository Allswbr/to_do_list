import create from 'zustand'

import { generateId } from '../helpers'

interface Task {
    id: string;
    title: string;
    createAt: number;
}

interface ToDoStore {
    tasks: Task[];
    createTask: (title: string) => void;
    updateTask: (id: string, title: string) => void;
    removeTask: (id: string) => void;
}

export const useToDoStore = create<ToDoStore>((set, get) =>({
        tasks: [
            {
                id:'fffffffffff',
                title: 'Дефолтная таска',
                createAt: 343243
            },
            {
                id:'fffffffffffffff',
                title: 'Дефолтная таска 2',
                createAt: 343243324
            }
        ],
        createTask: (title: string) => {
            const { tasks } = get();
            const newTask = {
                id: generateId(),
                title,
                createAt: Date.now(),
            };

            set({
                tasks: [newTask].concat(tasks),
            })
        },
        updateTask: (id: string, title: string) => {
            const { tasks }= get();
            set( {
                tasks: tasks.map((task) => ({
                    ...task,
                    title: task.id === id ? title : task.title,
                }))
            })
        },
        removeTask: (id: string) => {
            const { tasks }= get();
            set( {
                tasks: tasks.filter((task) => task.id !== id
                )
            })
        },
    }
    )
)