import { CheckCircle, Eraser } from "lucide-react";
import style from "./taskItem.module.css"

export function TeskItem() {
    return (
        <div className={style.taskItem}>
            <button className={style.checkButton}>
                <CheckCircle />
            </button>

            <span className={style.taskItem}>Back-end</span>

            <button className={style.deleteButton}>
                <Eraser />
            </button>
        </div>
    )
}