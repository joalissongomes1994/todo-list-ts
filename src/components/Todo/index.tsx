import { useState } from "react";
import { TodoEmpty } from "../TodoEmpty";
import { TaskItem } from "../TaskItem";
import { TaskForm } from "../TaskForm";
import { v4 as uuidv4 } from "uuid";
import { ITask } from "../../types";

import style from "./Todo.module.css";

export function Todo() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleCreateTask(task: string) {
    setTasks(state => [
      ...state, 
      {
        id: uuidv4(),
        isComplete: false,
        title: task
      }
    ])
  }

  function handleClickComplete(id: string) {
    const newTasks = tasks.map(item => {
      if(item.id === id) item.isComplete = !item.isComplete;
      return item;
    })

    setTasks(newTasks);
  }

  return(
    <div className={style.container}>
      <TaskForm onHandleCreateTask={handleCreateTask} />

        <div className={style.headerList}>
          <strong className={style.created}>
            Tarefas criadas
            <span>{tasks.length}</span>
          </strong>
        
          <strong className={style.done}>
            Concluidas
            <span>0</span>
          </strong>
        </div>

      {tasks.length === 0 
        ? <TodoEmpty /> 
        : tasks.map(task => (
          <TaskItem 
            key={task.id} 
            taskData={task}
            onHandleClickComplete={handleClickComplete}
          />
        ))
      }
    </div>
  )
}