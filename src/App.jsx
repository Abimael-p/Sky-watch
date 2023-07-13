import WeatherDetails from "./components/weatherDetails/WeatherDetails";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1 className="main__title">Sky Watch</h1>
      </header>
      <section>
        <WeatherDetails />
      </section>
    </>
  );
}

export default App;
