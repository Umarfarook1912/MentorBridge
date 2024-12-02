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
                        <h6> Total PortFolio Value:<strong>{props.summary.totalPortFolioValue}</strong></h6>
                        <h6>Total Stock Owned: <strong>{props.summary.totalStocksOwned}</strong></h6>
                        <h6>User Cash Balance: <strong>{props.summary.userCashBalance}</strong></h6>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}