import { useState } from 'react';
import './App.css';
import { PortfolioDetails } from './Portfoliodetails';
import { PortfolioSummary } from './PortfolioSummary';
import { StockList } from './Stocklist';
import { TradeStock } from './TradeStock';
import { Navbar,Container } from 'react-bootstrap';


function App() {
  const[Details,setDetails]=useState({
    totalPortFolioValue:50000000,
    totalStocksOwned:10,
    userCashBalance:50000
  })
  return (
    <div className="App">
      <Navbar  style={{ backgroundColor: 'green', color: 'white' }} variant="dark">
        <Container>
          <Navbar.Brand>Stock Market Portfolio Tracker</Navbar.Brand>
        </Container>
      </Navbar>
      <PortfolioSummary summary={Details}/>
      <StockList/>
      <TradeStock/>
      <PortfolioDetails/>
      
    </div>
  );
}

export default App;
