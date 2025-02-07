import './App.css'
import AdventureTravel from './components/AdventureTravel';
import Carousel from "./components/Carousel";
import CityCards from './components/CityCards';
import CountryCards from './components/CountryCards';
import CulturalTravel from './components/CulturalTravel';
import TravelCards1 from './components/TravelCards1';
import TravelType from './components/TravelType';

function App() {

  return (
    <>
    {/* <div className="flex items-center justify-center min-h-screen w-full">
      <Carousel />
    </div>
    <div className='mt-10 w-full'>
      <TravelType/>
    </div>
    <div className='mt-10 w-full'>
      <CityCards />
    </div>
    <div className='mt-10 w-full'>
      <CountryCards />
    </div> */}
    <CulturalTravel/>
    </>
  )
}

export default App
