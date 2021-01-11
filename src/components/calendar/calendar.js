import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import { Component } from 'react';
import eventlist from "./events.js"
import './stylesDesktop.scss'
import './stylesMobile.scss'
import './stylesTablet.scss'
import { useMediaQuery } from 'react-responsive'
import clsx from 'clsx'


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

const localizer = momentLocalizer(moment)

// #F1D5FF - light
// #DB90FF - medium 
// #B721FF - dark 
const calenderStyle = (event, start, end, isSelected) => {
    if (isSelected) {
        return {
            style: {
              outline: 'none',
              backgroundColor: '#DB90FF',
              borderStyle: 'solid',
              borderColor: '#B721FF',
              borderRadius: '0px',
              borderLeftWidth: '10px',
              borderRightWidth: '0px',
              borderTopWidth: '0px',
              borderBottomWidth: '0px',
              color: 'black',
              fontSize: '12px',
              fontWeight: 'bold',
              marginLeft: '5px',
              width: 'calc(100% - 10px)',
            }
          }
    }
    return {
      style: {
        backgroundColor: '#F1D5FF',
        borderStyle: 'solid',
        borderColor: '#c44dff',
        borderRadius: '0px',
        borderLeftWidth: '10px',
        borderRightWidth: '0px',
        borderTopWidth: '0px',
        borderBottomWidth: '0px',
        color: 'black',
        fontSize: '12px',
        fontWeight: 'bold',
        marginLeft: '5px',
        width: 'calc(100% - 10px)',
        outline: 'none',
      }
    }
}

const calenderStyleMobile = (event, start, end, isSelected) => {
    if (isSelected) {
        return {
            style: {
              outline: 'none',
              backgroundColor: '#DB90FF',
              borderStyle: 'solid',
              borderColor: '#B721FF',
              borderRadius: '0px',
              borderLeftWidth: '5px',
              borderRightWidth: '0px',
              borderTopWidth: '0px',
              borderBottomWidth: '0px',
              color: 'black',
              fontSize: '10px',
              fontWeight: 'bold',
              marginLeft: '2px',
              width: 'calc(100% - 4px)',

            }
          }
    }
    return {
      style: {
        backgroundColor: '#F1D5FF',
        borderStyle: 'solid',
        borderColor: '#c44dff',
        borderRadius: '0px',
        borderLeftWidth: '5px',
        borderRightWidth: '0px',
        borderTopWidth: '0px',
        borderBottomWidth: '0px',
        color: 'black',
        fontSize: '10px',
        fontWeight: 'bold',
        marginLeft: '2px',
        width: 'calc(100% - 4px)',
        outline: 'none',
      }
    }
}
let formats = {
    monthHeaderFormat: (date, culture, localizer) => 
        localizer.format(date, 'MMMM', culture),

    dayHeaderFormat: (date, culture , localizer) =>
        localizer.format(date, 'ddd, MMM DD', culture),

    dayRangeHeaderFormat: ({start,end}, culture , localizer) =>
        localizer.format(start, 'MMM DD', culture) + ' - ' + localizer.format(end, 'MMM DD', culture),

    agendaHeaderFormat: ({start,end}, culture , localizer) =>
        localizer.format(start, 'MMM DD', culture) + ' - ' + localizer.format(end, 'MMM DD', culture),
}

let formatsMobile = {
    monthHeaderFormat: (date, culture, localizer) => 
        localizer.format(date, 'MMMM', culture),

    dayHeaderFormat: (date, culture , localizer) =>
        localizer.format(date, 'ddd, MMM DD', culture),

    dayRangeHeaderFormat: ({start,end}, culture , localizer) =>
        localizer.format(start, 'MMM DD', culture) + ' - ' + localizer.format(end, 'MMM DD', culture),

    agendaHeaderFormat: ({start,end}, culture , localizer) =>
        localizer.format(start, 'MMM DD', culture) + ' - ' + localizer.format(end, 'MMM DD', culture),
    
    weekdayFormat: (date, culture, localizer) =>
        localizer.format(date, 'dd', culture),

    dayFormat: (date, culture, localizer) => 
        localizer.format(date, 'dd', culture),
    
}

let navigate = {
    PREVIOUS: 'PREV',
    NEXT: 'NEXT',
    TODAY: 'TODAY',
    DATE: 'DATE',
}

class CustomToolbar extends Component {

    render() {
        let {
          localizer: { messages },
          label,
        } = this.props
    
        return (
          <div className="rbc-toolbar">
            <span className="rbc-btn-group nav">
                <button
                    type="button"
                    onClick={this.navigate.bind(null, navigate.PREVIOUS)}
                >
                    &#60;
                </button>
            </span>
            <span className="rbc-toolbar-label">{label}</span>
            <span className="rbc-btn-group nav">
                <button
                    type="button"
                    onClick={this.navigate.bind(null, navigate.NEXT)}
                >
                    &#62;
                </button>
            </span>

            <span className="rbc-btn-group views">{this.viewNamesGroup(messages)}</span>
          </div>
        )
      }
    
      navigate = action => {
        this.props.onNavigate(action)
      }
    
      view = view => {
        this.props.onView(view)
      }
    
      viewNamesGroup(messages) {
        let viewNames = this.props.views
        const view = this.props.view
    
        if (viewNames.length > 1) {
          return viewNames.map(name => (
            <button
              type="button"
              key={name}
              className={clsx({ 'rbc-active': view === name })}
              onClick={this.view.bind(null, name)}
            >
              {messages[name]}
            </button>
          ))
        }
      }

}

export default class CustomCalendar extends Component {
    constructor() {
        super();
        this.state = {
            title: this.findRecent(eventlist, 1),
            start: this.findRecent(eventlist, 2),
            end: this.findRecent(eventlist, 3),
            link: this.findRecent(eventlist, 4),
            desc: this.findRecent(eventlist, 5),   
        }
        this.onClick = this.onClick.bind(this)
        this.findRecent = this.findRecent.bind(this)
    }

    findRecent(list, num) {
        let today = new Date()
        let index = 0 

        while (index < list.length) {
            if (today > list[index].start) index += 1;
            else {
                index += 1
                break
            }
        }
        if (index === list.length) {
            index -= 1
        }
        if (num === 1) return String(list[index-1].title)
        else if (num === 2) return String(list[index-1].start)
        else if (num === 3) return String(list[index-1].end)
        else if (num === 4) return String(list[index-1].link)
        else return String(list[index-1].desc)
    }

    onClick(event) {
        this.setState({
            title: String(event.title),
            start: String(event.start),
            end: String(event.end),
            desc: String(event.desc),
        })
    }


    clean(string) {
        var index = 0
        var val = 5
        while (val) {
            if (string[index] === " ") val -= 1
            index +=1;
        }
        return string.substring(0,index-4) + " (EST)"
    }

    

    render () {
        var start  = this.clean(this.state.start)
        var end = this.clean(this.state.end)
        return  (
            <div>
                <Mobile>
                    <div id="container" className="container-mobile">
                        <div id="calendar_div" className="calendar-mobile">
                            <Calendar 
                                popup={true}
                                events={eventlist}
                                localizer={localizer} 
                                startAccessor="start"
                                endAccessor="end"
                                defaultView="month"
                                views={{month: true, day: true, week: true, agenda: true}}
                                style={{ height: '100%', width: '100%' }}
                                eventPropGetter={calenderStyleMobile}
                                onSelectEvent={event => this.onClick(event)}
                                components={{toolbar: CustomToolbar}}
                                formats={formatsMobile}
                            />
                            
                        </div>
                        <div id="event" className="event-container-mobile">
                            <div id="title" className="title-mobile">
                                <p>{this.state.title}</p>
                            </div>
                            <div id="date" className="date-mobile">
                                <p> <span>Start:</span> {start} </p>
                                <p><span>End:</span>  {end} </p>
                                <p><span>Zoom Link:</span>  <a rel="noopener noreferrer"  target="_blank" href={this.state.link}> {this.state.link}</a> </p>
                            </div> 
                            <div id="description" className="description-mobile">
                                <p>{this.state.desc}</p>
                            </div>
                        </div>

                    </div>   
                </Mobile> 

                <Tablet>
                    <div id="container" className="container-tablet">
                        <div id="calendar_div" className="calendar-tablet">
                            <Calendar 
                                popup={true}
                                events={eventlist}
                                localizer={localizer} 
                                startAccessor="start"
                                endAccessor="end"
                                defaultView="month"
                                views={{month: true, day: true, week: true, agenda: true}}
                                style={{ height: '100%', width: '100%' }}
                                eventPropGetter={calenderStyle}
                                onSelectEvent={event => this.onClick(event)}
                                components={{toolbar: CustomToolbar}}
                                formats={formats}

                            />
                            
                        </div>
                        <div id="event" className="event-container-tablet">
                            <div id="title" className="title-tablet">
                                <p>{this.state.title} </p>
                            </div>
                            <div id="date" className="date-tablet">
                                <p> <span>Start:</span> {start} </p>
                                <p><span>End:</span>  {end} </p>
                                <p><span>Zoom Link:</span>  <a target="_blank" rel="noopener noreferrer"  href={this.state.link}> {this.state.link}</a> </p>
                            </div> 
                            <div id="description" className="description-tablet">
                                <p>{this.state.desc}</p>
                            </div>
                        </div>

                    </div>   
                </Tablet> 
                
                <Desktop>
                    <div id="container" className="container">
                        <div id="calendar_div" className="calendar">
                            <Calendar 
                                popup={true}
                                events={eventlist}
                                localizer={localizer} 
                                startAccessor="start"
                                endAccessor="end"
                                defaultView="month"
                                views={{month: true, day: true, week: true, agenda: true}}
                                style={{ height: '100%', width: '100%' }}
                                eventPropGetter={calenderStyle}
                                onSelectEvent={event => this.onClick(event)}
                                selectable={true}
                                components={{toolbar: CustomToolbar}}
                                formats={formats}

                            />
                        </div>
                        <div id="event" className="event-container">
                            <div id="title" className="title">
                                <p>{this.state.title}</p>
                            </div>
                            <div id="date" className="date">
                                <p> <span>Start:</span> {start} </p>
                                <p><span>End:</span>  {end} </p>
                                <p><span>Zoom Link:</span>  <a rel="noopener noreferrer"  target="_blank" href={this.state.link}> {this.state.link}</a> </p>
                            </div> 
                            <div id="description" className="description">
                                <p>{this.state.desc}</p>
                            </div>
                        </div>   
                    </div>  
                </Desktop>  
                
            </div>
        )
    }
}