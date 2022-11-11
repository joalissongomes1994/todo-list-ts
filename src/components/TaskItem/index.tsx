import style from "./TaskItem.module.css";
import {BsFillCheckCircleFill, BsCircle, BsTrash} from "react-icons/bs"
import { ITask } from "../../types";
interface ITaskProps {
  taskData: ITask
}

export function TaskItem({ taskData: { id, isComplete, title} }: ITaskProps) {
  return(
    <div className={style.contentItem}>
      <button className={style.buttonCheck}>
        {isComplete 
          ? <BsFillCheckCircleFill size={20} className={style.isChecked}/> 
          : <BsCircle size={20} className={style.isNotChecked} />
        }
      </button>
      <div className={style.taskDescriptionArea}>
        <p 
          className={`${style.taskDescription} ${isComplete && style.taskDescriptionDone}`}
        >
          {title}
        </p>
      </div>
      
      <button className={style.buttonTrash}>
        <BsTrash size={20}/>
      </button>   
    </div>
  )
}