import { Card } from "react-bootstrap"
export const PortfolioSummary = (props) => {

const fetchApi = async () => {
    await fetch('')
}

    return (
        <div className="d-flex justify-content-center mt-5 mb-5">
            <Card style={{ width: "20rem" }}>
                <Card.Header>Summary</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <h6> Total PortFolio Value:{props.summary.totalPortFolioValue}</h6>
                        <h6>Total Stock Owner: {props.summary.totalStocksOwned}</h6>
                        <h6>User Cash Balance: {props.summary.userCashBalance}</h6>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}