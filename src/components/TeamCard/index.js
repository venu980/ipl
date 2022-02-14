// Write your code here

import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {name, teamImageUrl} = teamCardDetails

  return (
    <li className="team-card-container">
      <div className="team-card">
        <h1 className="team-name">{name}</h1>
        <img src={teamImageUrl} alt={name} className="team-img" />
      </div>
    </li>
  )
}

export default TeamCard
