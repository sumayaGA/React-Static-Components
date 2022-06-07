import './App.css';
import Reviews from "./components/Reviews";
import Sidebar from './components/Sidebar';
import Averagerating from "./components/Averagerating";
import Sentimentanalysis from "./components/Sentimentanalysis";
import Websitevisitors from "./components/Websitevisitors";
import "./style.css"

function App() {
  return (
    <div className='container'>
      <div className='average'><Averagerating/></div>
      <div className='reviews'><Reviews/></div>
      <div className='sentiment'><Sentimentanalysis/></div>
      <div className='sidebar'><Sidebar/></div>
      <div className='website'><Websitevisitors/></div>
    </div>
  );
}

export default App;
