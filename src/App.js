import './App.css';
import PortfolioList from './components/PortfolioList/PortfolioList';
import Header from './components/Header/Header.js';

function App () {
  return (
    <div className="App">
      <Header/>
      <PortfolioList/>
    </div>
  );
}

export default App;
