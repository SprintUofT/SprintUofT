import React, {Component} from 'react'
import * as dates from 'date-arithmetic'
//import events from './events.js'
import {Views, Navigate } from 'react-big-calendar'

export default class MyWeek extends Component {
  render() {

    return (
        <div className="rbc-agenda-view">
           
        </div>
    )
  }
}


MyWeek.range = (start, { length = MyWeek.defaultProps.length }) => {
    let end = dates.add(start, length, 'day')
    return { start, end }
  }

MyWeek.navigate = (date, action, { length = MyWeek.defaultProps.length }) => {
    switch (action) {
        case Navigate.PREVIOUS:
            return dates.add(date, -length, 'day')

        case Navigate.NEXT:
            return dates.add(date, length, 'day')

        default:
            return 
  }
}

MyWeek.title = (start, { length = MyWeek.defaultProps.length, localizer }) => {
  let end = dates.add(start, length, 'day')
  return localizer.format({ start, end }, 'agendaHeaderFormat')
}

