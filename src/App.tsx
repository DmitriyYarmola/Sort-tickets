import React, { useEffect, useState } from 'react';
import './App.sass';
import { OptionTickets } from './Component/OptionTickets/OptionTikects';
import { TicketsList } from './Component/TikectsList/TicketsList';

import { UseTickets } from './api/api';

type SegmentsType = {
  // Код города (iata)
  origin: string
  // Код города (iata)
  destination: string
  // Дата и время вылета туда
  date: string
  // Массив кодов (iata) городов с пересадками
  stops: string[]
  // Общее время перелёта в минутах
  duration: number
}

export type TicketsType = {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: Array<SegmentsType>
}

type StateType = {
  tickets: Array<TicketsType> | undefined
  ticketsPrev: Array<TicketsType> | undefined
  ticketsStart: Array<TicketsType> | undefined
}

export const App = () => {
  let [allTickets, setTicketsAll] = useState<StateType | undefined>({ tickets: [], ticketsPrev: [], ticketsStart: [] })

  useEffect(() => {
    UseTickets.getSearchId().then(data => {
      setTicketsAll({ tickets: data.tickets, ticketsPrev: data.tickets, ticketsStart: data.tickets })
    })
  }, [])


  const SearchOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    let currentBox = e.currentTarget
    let currentBoxChecked = currentBox.checked
    setTicketsAll((prevState) => {
      console.log(allTickets?.tickets)
      switch (currentBox.name) {
        case 'withoutTransplants':
          if (currentBoxChecked) {
            return allTickets?.tickets === allTickets?.ticketsStart ?
              {
                tickets: [...allTickets?.ticketsStart?.filter(ticket => (ticket.segments[0].stops.length === 0) && (ticket.segments[1].stops.length === 0))],
                ticketsPrev: allTickets?.tickets,
                ticketsStart: allTickets?.ticketsStart
              }
              :
              {
                tickets: [...allTickets?.tickets, ...allTickets?.ticketsStart?.filter(ticket => (ticket.segments[0].stops.length === 0) && (ticket.segments[1].stops.length === 0))],
                ticketsPrev: allTickets?.tickets, //2
                ticketsStart: allTickets?.ticketsStart
              }

          } else {
            return allTickets?.tickets === prevState?.ticketsPrev ?
              {
                tickets: allTickets?.ticketsStart,
                ticketsPrev: allTickets?.ticketsPrev,
                ticketsStart: allTickets?.ticketsStart

              }
              :
              [...prevState?.tickets!.filter(ticket => (ticket.segments[0].stops.length !== 0) && (ticket.segments[1].stops.length !== 0))].length === 0 ?
                {
                  tickets: allTickets?.ticketsStart,
                  ticketsPrev: allTickets?.tickets,
                  ticketsStart: allTickets?.ticketsStart

                }
                :
                {
                  tickets: [...prevState?.tickets!.filter(ticket => (ticket.segments[0].stops.length !== 0) && (ticket.segments[1].stops.length !== 0))],
                  ticketsPrev: allTickets?.tickets,
                  ticketsStart: allTickets?.ticketsStart

                }
          }
        case 'oneTransplant':
          if (currentBoxChecked) {
            return allTickets?.tickets === allTickets?.ticketsStart ?
              {
                tickets: [...allTickets?.ticketsStart?.filter(ticket => (ticket.segments[0].stops.length === 1) && (ticket.segments[1].stops.length === 1))],
                ticketsPrev: allTickets?.tickets,
                ticketsStart: allTickets?.ticketsStart
              }
              :
              {
                tickets: [...allTickets?.tickets, ...allTickets?.ticketsStart?.filter(ticket => (ticket.segments[0].stops.length === 1) && (ticket.segments[1].stops.length === 1))],
                ticketsPrev: allTickets?.tickets,
                ticketsStart: allTickets?.ticketsStart
              }
          } else {
            return allTickets?.tickets === allTickets?.ticketsPrev ?
              {
                tickets: allTickets?.ticketsPrev,
                ticketsPrev: allTickets?.ticketsPrev,
                ticketsStart: allTickets?.ticketsStart

              }
              :
              [...prevState?.tickets!.filter(ticket => (ticket.segments[0].stops.length !== 1) && (ticket.segments[1].stops.length !== 1))].length === 0 ?
                {
                  tickets: allTickets?.ticketsStart,
                  ticketsPrev: allTickets?.tickets,
                  ticketsStart: allTickets?.ticketsStart

                }
                :
                {
                  tickets: [...prevState?.tickets!.filter(ticket => (ticket.segments[0].stops.length !== 1) && (ticket.segments[1].stops.length !== 1))],
                  ticketsPrev: allTickets?.tickets,
                  ticketsStart: allTickets?.ticketsStart

                }
          }
        case 'twoTransplants':
          if (currentBoxChecked) {
            return allTickets?.tickets === allTickets?.ticketsStart ?
              {
                tickets: [...allTickets?.ticketsStart?.filter(ticket => (ticket.segments[0].stops.length === 2) && (ticket.segments[1].stops.length === 2))],
                ticketsPrev: allTickets?.tickets,
                ticketsStart: allTickets?.ticketsStart
              }
              :
              {
                tickets: [...allTickets?.tickets, ...allTickets?.ticketsStart?.filter(ticket => (ticket.segments[0].stops.length === 2) && (ticket.segments[1].stops.length === 2))],
                ticketsPrev: allTickets?.tickets,
                ticketsStart: allTickets?.ticketsStart
              }
          } else {
            return allTickets?.tickets === allTickets?.ticketsPrev ?
              {
                tickets: allTickets?.ticketsPrev,
                ticketsPrev: allTickets?.ticketsPrev,
                ticketsStart: allTickets?.ticketsStart

              }
              :
              [...prevState?.tickets!.filter(ticket => (ticket.segments[0].stops.length !== 2) && (ticket.segments[1].stops.length !== 2))].length === 0 ?
                {
                  tickets: allTickets?.ticketsStart,
                  ticketsPrev: allTickets?.tickets,
                  ticketsStart: allTickets?.ticketsStart

                }
                :
                {
                  tickets: [...prevState?.tickets!.filter(ticket => (ticket.segments[0].stops.length !== 2) && (ticket.segments[1].stops.length !== 2))],
                  ticketsPrev: allTickets?.tickets,
                  ticketsStart: allTickets?.ticketsStart

                }
          }
        case 'threeTransplants':
          if (currentBoxChecked) {
            return allTickets?.tickets === allTickets?.ticketsStart ?
              {
                tickets: [...allTickets?.ticketsStart?.filter(ticket => (ticket.segments[0].stops.length === 3) && (ticket.segments[1].stops.length === 3))],
                ticketsPrev: allTickets?.tickets,
                ticketsStart: allTickets?.ticketsStart
              }
              :
              {
                tickets: [...allTickets?.tickets, ...allTickets?.ticketsStart?.filter(ticket => (ticket.segments[0].stops.length === 3) && (ticket.segments[1].stops.length === 3))],
                ticketsPrev: allTickets?.tickets,
                ticketsStart: allTickets?.ticketsStart
              }
          } else {
            return allTickets?.tickets === allTickets?.ticketsPrev ?
              {
                tickets: allTickets?.ticketsPrev,
                ticketsPrev: allTickets?.ticketsPrev,
                ticketsStart: allTickets?.ticketsStart

              }
              :
              [...prevState?.tickets!.filter(ticket => (ticket.segments[0].stops.length !== 3) && (ticket.segments[1].stops.length !== 3))].length === 0 ?
                {
                  tickets: allTickets?.ticketsStart,
                  ticketsPrev: allTickets?.tickets,
                  ticketsStart: allTickets?.ticketsStart

                }
                :
                {
                  tickets: [...prevState?.tickets!.filter(ticket => (ticket.segments[0].stops.length !== 3) && (ticket.segments[1].stops.length !== 3))],
                  ticketsPrev: allTickets?.tickets,
                  ticketsStart: allTickets?.ticketsStart

                }
          }
        case 'allTransplants':
          if (currentBoxChecked) {
            return (
              {
                tickets: allTickets?.ticketsStart,
                ticketsPrev: allTickets?.tickets,
                ticketsStart: allTickets?.ticketsStart
              }
            )
          } else {
            return allTickets?.tickets === allTickets?.ticketsPrev ?
              {
                tickets: allTickets?.ticketsPrev,
                ticketsPrev: allTickets?.ticketsPrev,
                ticketsStart: allTickets?.ticketsStart

              }
              :
              {
                tickets: allTickets?.tickets,
                ticketsPrev: allTickets?.tickets,
                ticketsStart: allTickets?.ticketsStart

              }

          }

      }
    })
  }


  if (!allTickets) return <div>Loading....</div>

  return (
    <div className="container app-wrap">
      <OptionTickets SearchOption={SearchOption} />
      <TicketsList tickets={allTickets.tickets} />
    </div>
  );
}

