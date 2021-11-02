import './App.css';
import PortfolioList from './components/PortfolioList/PortfolioList';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer';

function App (props) {
  return (
    <div className="App">
      <Header/>
      <PortfolioList/>
      <Footer/>      
    </div>
  );
}

export default App;
