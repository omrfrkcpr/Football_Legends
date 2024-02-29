import { data } from "./helpers/data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import CardContainer from "./components/card-container/CardContainer";
import PlayerCard from "./components/player-card/PlayerCard";

function App() {
  return (
    <div className="App container">
      <Header />
      <CardContainer data={data} />
      <PlayerCard data={data} />
    </div>
  );
}

export default App;
