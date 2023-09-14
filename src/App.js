import './components/header/styles/header.scss';
import './components/main/main.scss';
import './components/footer/styles/footer.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/main/index.js'
import Header from './components/header';
import TeachersPage from './components/main/teachersPage';
function App() {
  return (
    <> 
    <Router>
      <Routes>
        <Route path='/maryproschool' element={<MainPage/>} />
        <Route path='/teacher' element={<TeachersPage/>} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
