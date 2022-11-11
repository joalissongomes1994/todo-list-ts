import style from "./TodoEmpty.module.css";
import imgClipboard from "../../assets/clipboard.png"

export function TodoEmpty() {
  return(
    <div className={style.contentList}>
      <img src={imgClipboard} alt="clipboard image" />

      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}