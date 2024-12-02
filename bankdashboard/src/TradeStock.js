import { Form, Card, Button } from "react-bootstrap";
import { useState } from "react";

    export const TradeStock = (props) => {
        const [currentPrice, setcurrentPrice] = useState(0);
        const [type, setType] = useState();

        const handleChange = (value) => {
            console.log(value);
            if (value > 0) {
                setcurrentPrice(value);
            }
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (type === "Buy" && props.userCashBalance >= currentPrice) {
                props.updateBalance(props.userCashBalance - currentPrice);
            } else if (type === "Sell") {
                props.updateBalance(props.userCashBalance + currentPrice);
            } else {
                alert("Insufficient balance");
            }
        };
        return (
            <div className="d-flex justify-content-center p-5">
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <Form.Label htmlFor="inputPassword5">Select Symbol</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Please Select</option>
                                        <option value="1">ASAP</option>
                                        <option value="2">AAPL</option>
                                        <option value="3">TSLA</option>
                                    </Form.Select>
                                </div>
                                <div>
                                    <Form.Label htmlFor="inputPassword5">Quantity</Form.Label>
                                    <Form.Control type="number" id="quantity" />
                                </div>
                                <div>
                                    <Form.Label htmlFor="inputPassword5">Current Price</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="currentprice"
                                        name="currentprice"
                                        value={currentPrice}
                                        onChange={(e) => handleChange(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Form.Label htmlFor="inputPassword5">Type</Form.Label>
                                    <Form.Select
                                        aria-label="Default select example"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                    >
                                        <option>Please Select</option>
                                        <option value="buy">Buy</option>
                                        <option value="sell">Sell</option>
                                    </Form.Select>
                                </div>
                                <div className="mt-4">
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    };