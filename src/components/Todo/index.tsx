import { TodoEmpty } from "../TodoEmpty";
import { TaskItem } from "../TaskItem";
import { Button } from "../Button";

import style from "./Todo.module.css";

const tasks = [1, 2, 3, 4, 5];

export function Todo() {
  return(
    <div className={style.container}>
      <Button />

        <div className={style.headerList}>
          <strong className={style.created}>
            Tarefas criadas
            <span>5</span>
          </strong>
        
          <strong className={style.done}>
            Concluidas
            <span>2 de 5</span>
          </strong>
        </div>

      {tasks.length === 0 
        ? <TodoEmpty /> 
        : tasks.map(task => <TaskItem key={task} />)
      }
    </div>
  )
}