import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns, Londres, Denver } from './data.js';

function App() {
  return (
    <div className="App">
      <div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
        <Card
          max={Londres.main.temp_max}
          min={Londres.main.temp_min}
          name={Londres.name}
          img={Londres.weather[0].icon}
          onClose={() => alert(Londres.name)}
        />
        <Card
          max={Denver.main.temp_max}
          min={Denver.main.temp_min}
          name={Denver.name}
          img={Denver.weather[0].icon}
          onClose={() => alert(Denver.name)}
        />
      </div>
      <hr />
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
    </div>
  );
}

export default App;
