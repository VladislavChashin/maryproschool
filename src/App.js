import './components/header/styles/header.scss';
import './components/main/main.scss';
import './components/footer/styles/footer.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/main/index.js'
import Header from './components/header';
import TeachersPage from './components/main/teachersPage';
import PricePage from './components/main/pricePage/index.js';
import 'animate.css';
import ContactPage from './components/main/contactPage/index.js';

function App() {  
  return (
    <> 
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/teacher' element={<TeachersPage/>} />
        <Route path='/price' element={<PricePage/>} />
        <Route path='/contacts' element={<ContactPage/>} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
