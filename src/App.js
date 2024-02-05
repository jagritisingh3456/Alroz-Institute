import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Training from './Training/Training'
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact'
import AeronauticalE from './component/Courses/AeronauticalE'
import AirHostessCourse from './component/Courses/AirHostessCourse'
import AirlineTravelTourism from './component/Courses/AirlineTravelTourism'
import BBAAirportM from './component/Courses/BBAAirportM'
import BBAMBAIntegratedC from './component/Courses/BBAMBAIntegratedC'
import BInAerospaceE from './component/Courses/BInAerospaceE'
import BScInAviation from './component/Courses/BScInAviation'
import InternationalAirHostessC from './component/Courses/InternationalAirHostessC'
import MBAAviationM from './component/Courses/MBAAviationM'
import ShippingLogistics from './component/Courses/ShippingLogistics'
import Franchise from './Franchise/Franchise'
import JoinNow from './JoinNow/JoinNow'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/gallery" element={<Gallery/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path ="/airHostessCourse" element={<AirHostessCourse/>}/>
           <Route path="/aeronauticalE" element={<AeronauticalE/>}/>
           <Route path="/airline-travel-tourism" element={<AirlineTravelTourism/>}/>
           <Route path="/bba-airport-management" element={<BBAAirportM/>}/>
           <Route path="/bba-mba-integrated-course" element={<BBAMBAIntegratedC/>}/>
           <Route path="/aachelor-in-aerospace-engineering" element={<BInAerospaceE/>}/>
           <Route path="/b.Sc-in-aviation" element={<BScInAviation/>}/>
           <Route path="/mba-aviation-management" element={<MBAAviationM/>}/>
           <Route path="/international-air-hostess-course" element={<InternationalAirHostessC/>}/>
           <Route path="/shipping-logistics" element={<ShippingLogistics/>}/>
           <Route path="/training" element={<Training/>}/>
           <Route path="/franchise" element={<Franchise/>}/>
           <Route path="/joinnow" element={<JoinNow/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
