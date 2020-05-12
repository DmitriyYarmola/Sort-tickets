import { TicketsType } from "../App"

export type TicketType = {
    carrier: string
    price: number
}

type UseTicketsType = {
    stop: boolean
    tickets: Array<TicketsType> | undefined
}


export const UseTickets = {
    getSearchId():Promise<UseTicketsType> {
        return fetch('https://front-test.beta.aviasales.ru/search')
            .then((response) => response.json())
            .then(data => {
                return fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${data.searchId}`)
            })
            .then(response => response.json())
            .catch(e => console.error(e))
    },

}

