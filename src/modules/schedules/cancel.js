import { scheduleCancel } from "../../services/schedule-cancel"
import { schedulesDay } from "./load"

const periods = document.querySelectorAll(".period")

periods.forEach((periods) => {
    periods.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")){
            const item = event.target.closet("li")
            const { id } = item.dataset

            if(id){
                const isConfirm = confirm(
                    "Tem certeza que deseja cancelar o agendamento?"
                )
            
            
                if (isConfirm) {
                    await scheduleCancel({id})
                    schedulesDay()
                }
            }
        }
    })
})