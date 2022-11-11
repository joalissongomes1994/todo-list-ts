import { BsPlusCircle } from "react-icons/bs";
import style from "./Button.module.css";

export function Button() {
  return(
    <form className={style.addTaskForm}>
      <input type="text" placeholder="Adicione uma nova tarefa"/>
      <button type="submit">Criar <BsPlusCircle /></button>
    </form>
  )
}