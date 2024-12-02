import { useState,useEffect } from "react"
import { Card,Button } from "react-bootstrap"
export const StockList = () => {
    const [Stocks,setStocks]=useState([]);
    
    const fetchStock=async()=>{
        setStocks([
            {
                id:1,
                symbol:"AAPL",
                companyName:"TCS ",
                currentPrice:500000.0,
                type:"sell"
            },
            {
                id:2,
                symbol:"TSLA",
                companyName:"Tesla",
                currentPrice:100000.0,
                type:"buy"
            },
            {
                id:3,
                symbol:"ASAP",
                companyName:"HCL",
                currentPrice:600000.0,
                type:"sell"
            },
        ]);
    };
    useEffect(()=>{
        fetchStock();
    },[]);
    return (
        <div className="d-flex justify-content-center mt-5 mb-5">
            <Card style={{ width: "20rem" }}>
                <Card.Header>Stock List</Card.Header>
                <Card.Body>
                    <Card.Text>
                       {Stocks.map((stock)=>(
                        <div key={stock.id}>
                            <div className="d-flex justify-content-between">
                                <div>{stock.symbol}</div>
                                <div>{stock.companyName}</div>
                                <div>{stock.currentPrice}</div>
                                <div><Button size="sm" href="#">Details</Button></div>
                                <div><Button size="sm" href="#">Trade</Button></div>
                                <br></br><br></br>
                            </div>
                            {/* <div className={stock.type === 'sell' ? 'sell' : 'buy'}>{stock.currentPrice}</div> */}
                        </div>
                       ))}
                    </Card.Text>
                </Card.Body>
                
            </Card>
        </div>
    )
}