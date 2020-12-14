import './Reset.css';
import './App.css';
import WeatherSection from './components/WeatherSection/WeatherSection';
import MapSection from './components/MapSection/MapSection';
import Footer from './components/Footer/Footer';

function App() {

  // local storage
  
  return (
    <div className="App">
      <WeatherSection />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;
