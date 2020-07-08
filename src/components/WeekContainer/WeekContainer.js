import React from 'react';
import Card from '../Card/Card';

const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Kaliningrad&lang=ru&units=metric&APPID=b77bfe7f341234dd36e56af420b362fe";

class WeekContainer extends React.Component {
  state = {
    days: []
  }

  componentDidMount = () => {
    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
      this.setState({days: dailyData})
    })
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index}/>)
  }

  render() {
    return (
      <div className="">
      <h1 className="display-4 jumbotron">Weather</h1>
      <h5 className="display-4 text-muted">Kaliningrad</h5>
        <div className="row justify-content-center">

          {this.formatCards()}

        </div>
      </div>
    )
  }
}

export default WeekContainer
