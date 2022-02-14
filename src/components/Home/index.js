// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamCardsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.renderTeamCardsList()
  }

  renderTeamCardsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const upDatedData = data.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamCardsList: upDatedData, isLoading: false})
  }

  loaderStatus = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading, teamCardsList} = this.state

    return (
      <div className="bg-container">
        <div className="head-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="ipl-heading">IPL Dashboard </h1>
        </div>
        <div className="cards-container">
          {isLoading ? (
            this.loaderStatus()
          ) : (
            <ul className="cards-list">
              {teamCardsList.map(eachItem => (
                <TeamCard key={eachItem.id} teamCardDetails={eachItem} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
