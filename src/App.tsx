import React from 'react';
import './App.css';
import basketballData from './CollegeBasketballTeams.json';

//makes the types of each part of the JSON data explicit
interface Team {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

//Header describing what the website is
function Header() {
  return (
    <div>
      <h1>College Basketball Teams</h1>
    </div>
  );
}

//Makes the "card" for each individual team
class Teams extends React.Component<Team> {
  render() {
    const teamData = this.props;
    return (
      <div className="Div-Border">
        <h2>{teamData.school} </h2>
        <h3>Mascot Name: {teamData.name}</h3>
        <h3>
          Location: {teamData.city}, {teamData.state}
        </h3>
      </div>
    );
  }
}

//A list of all of the "cards"
function TeamList() {
  return (
    <div>
      {basketballData.teams.map((teamData) => (
        <Teams {...teamData} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <TeamList />
    </div>
  );
}

export default App;
