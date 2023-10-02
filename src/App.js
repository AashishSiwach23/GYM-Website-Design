import Cards from './components/Cards';
import Footer from './components/Footer';
import First from './components/First';
import Division from './components/Division2';
import Slider from './components/Slider';
import Activity from './components/Activity';
import Navbar0 from './components/Navbar0';

function App() {
  return (
    <div className="App">
      <Navbar0/>
      <First/>
      <Division/>
      <Cards value="Free"  Cardstext="7 DAYS GYM TRIAL PLAN" text1="TRY NOW"  buttonColor="outline-dark"/>
      <Cards value="₹2999" Cardstext="3 MONTHS GYM PLAN" text1="BUY NOW" buttonColor="dark"/>
      <Cards value="₹13999" Cardstext="1 YEAR GYM PLAN  {BESTSELLER}" text1="BUY NOW" buttonColor="dark"/>
      <Slider/>
      <Activity/>
      <Footer/>
    </div>
  );
}

export default App;
