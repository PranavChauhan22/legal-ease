import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Client from './components/dashboards/client/Client';
import Advo from './components/dashboards/advo/Advo';
import Advocard from './components/dashboards/advo/Advocard';
import Search from './components/search/Search';
import Filter from './components/filter/Filter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Videosdk from './components/videosdk/Videosdk';
import Chatbot from './components/chatbot/Chatbot';
import News from './components/newsletter/news';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>

        <Route exact path="/" element={<Hero/>} ></Route>
        <Route exact path="/dashboard/:id" element={<Client/>} ></Route>
        <Route exact path="/client" element={<Advo/>} ></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/news/attorney" element={<News newsName="attorney" />}></Route>
        <Route path="/news/lawyer"element={<News newsName="lawyer" />}></Route>
        <Route path="/news/advocate" element={<News newsName="advocate" />}></Route>
        <Route path="/news/mediation" element={<News newsName="mediation" />}></Route>
      </Routes>
    </Router>
    
 
    </div>
  );
}

export default App;
