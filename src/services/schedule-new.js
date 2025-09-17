import { apiConfig } from "./api-config"

export async function scheduleNew({id, name, when}) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringfy({id, name, when})
        })

        alert("Agendamento realizado com sucesso!")
    } catch (error) {
        console.log(error)
        alent("Não foi possivel agendar, tente novamente mais tarde.")
    }
}