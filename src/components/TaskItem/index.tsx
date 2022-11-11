import style from "./TaskItem.module.css";
import {BsFillCheckCircleFill, BsCircle, BsTrash} from "react-icons/bs"

export function TaskItem() {
  return(
    <div className={style.contentItem}>
      <button className={style.buttonCheck}>
        <BsFillCheckCircleFill size={20} className={style.isChecked}/>
        {/* <BsCircle size={20} className={style.isNotChecked} /> */}
      </button>
      <p className={`${style.taskDescription} ${style.taskDescriptionDone}`}>Integer urna interdum massa libero auctor neque 
      turpis turpis semper. Duis vel sed fames integer.
      </p>
      <button className={style.buttonTrash}>
        <BsTrash size={20}/>
      </button>   
    </div>
  )
}