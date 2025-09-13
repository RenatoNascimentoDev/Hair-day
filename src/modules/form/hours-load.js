import dayjs from "dayjs"

import { openingHouers } from "../../utils/opening-hours.js"

export function houesLoad( {date} ) {
    const opening = openingHouers.map((hour) => {
        const [scheduleHour] = hour.split(":")

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs()) 
        
        return {
            hour,
            available: isHourPast,
        }
    })
}