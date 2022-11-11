import { ChangeEvent, FormEvent, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import style from "./TaskForm.module.css";

interface TaskFormProps {
  onHandleCreateTask: (task: string) => void
}

export function TaskForm({onHandleCreateTask}: TaskFormProps) {
  const [task, setTask] = useState<string>("");

  function handleTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value)
  }

  function createTask(event: FormEvent){
    event.preventDefault();
    onHandleCreateTask(task)
    setTask("");
  }

  return(
    <form onSubmit={createTask} className={style.addTaskForm}>
      <input 
        value={task}
        onChange={handleTask}
        type="text" 
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">Criar <BsPlusCircle /></button>
    </form>
  )
}