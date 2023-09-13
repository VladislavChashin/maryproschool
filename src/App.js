import './components/header/styles/header.scss';
import './components/main/main.scss';
import './components/footer/styles/footer.scss';
import Header from './components/header/index.js'
import Main from './components/main/index.js'
import Footer from './components/footer/index.js'
function App() {
  return (
    <> 
      <Header></Header>
      <Main></Main>
      <Footer/>
    </>
  );
}

export default App;
