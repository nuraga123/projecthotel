import './App.css';
import PortfolioList from './components/PortfolioList/PortfolioList';
import Header from './components/Header/Header.js';
import TransparentAnimation from './components/TransparentAnimation/TransparentAnimation';
import Footer from './components/Footer/Footer';

function App (props) {
  return (
    <div className="App">
      <Header/>
      <PortfolioList/>
      <TransparentAnimation/>
      <Footer/>
    </div>
  );
}

export default App;
