import React from 'react'
import './TicketsList.sass'
import LogoSVG from './../../img/logo.svg'
import { TicketsType } from '../../App'

type PropsType = {
    tickets: TicketsType[] | undefined
}

export const TicketsList: React.FC<PropsType> = ({ tickets }) => {
    let count = 0;
    let ticketsArray = tickets?.map(item => {
        let DateHourIn = Math.round(item.segments[0].duration / 3600)
        let DateMinutesIn = Number((item.segments[0].duration / 3600).toFixed(2).toString().slice(2))

        let DateHourOut = Math.round(item.segments[1].duration / 3600)
        let DateMinutesOut = Number((item.segments[1].duration / 3600).toFixed(2).toString().slice(2))

        return (
            <div className="ticket-item" key={count++}>
                <div className="ticket-item_title">
                    <div className="ticket-item_price">{item.price + ' P'}</div>
                    <div className="ticket-item_logo"><img src={LogoSVG} alt="" /></div>
                </div>
                <div className="ticket-item_info">
                    <div className="ticket-item_inTime">
                        <div className="ticket-item_block">
                            <span className="ticket-item_block-title">MOW – HKT</span>
                            <span>{`${new Date(item.segments[0].date).getFullYear()}-${new Date(item.segments[0].date).getMonth()}-${new Date(item.segments[0].date).getDate()}`}</span>
                        </div>
                        <div className="ticket-item_block">
                            <span className="ticket-item_block-title">В пути</span>
                            <span>{`${DateHourIn}ч ${DateMinutesIn}м`}</span>
                        </div>
                        <div className="ticket-item_block">
                            <span className="ticket-item_block-title">{item.segments[0].stops.length < 1 ? `${item.segments[0].stops.length} пересадок` : item.segments[0].stops.length > 1 ? `${item.segments[0].stops.length} пересадки` : `${item.segments[0].stops.length} пересадка`}</span>
                            <span>{item.segments[0].stops.join(', ')}</span>
                        </div>
                    </div>
                    <div className="ticket-item_outTime">
                        <div className="ticket-item_block">
                            <span className="ticket-item_block-title">MOW – HKT</span>
                            <span>{`${new Date(item.segments[1].date).getFullYear()}-${new Date(item.segments[1].date).getMonth()}-${new Date(item.segments[1].date).getDate()}`}</span>
                        </div>
                        <div className="ticket-item_block">
                            <span className="ticket-item_block-title">В пути</span>
                            <span>{`${DateHourOut}ч ${DateMinutesOut}м`}</span>
                        </div>
                        <div className="ticket-item_block">
                            <span className="ticket-item_block-title">{item.segments[1].stops.length < 1 ? `${item.segments[1].stops.length} пересадок` : item.segments[1].stops.length > 1 ? `${item.segments[1].stops.length} пересадки` : `${item.segments[1].stops.length} пересадка`}</span>
                            <span>{item.segments[1].stops.join(', ')}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="ticketsList">
            <div className="list-options">
                <div className="option-item">
                    <label>
                        <input name="test" type="radio" className="option-input" />
                        <span>Самый быстрый</span>
                    </label>
                </div>
                <div className="option-item">
                    <label>
                        <input name="test" type="radio" className="option-input" />
                        <span>Самый дешёвый</span>
                    </label>
                </div>
            </div>

            {ticketsArray}
        </div>
    )
}