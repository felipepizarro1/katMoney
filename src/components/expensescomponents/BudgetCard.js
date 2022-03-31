import { Card, CardBody, CardTitle, Progress } from "reactstrap";
import { currencyFormatter } from "./utils";

export default function BudgetCard({ name, amount, max }) {
  return (
    <Card>
        <CardBody>
            <CardTitle className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                <div className="me-2">{name}</div>
                <div className="d-flex align-items-baseline">{currencyFormatter.format(amount)}
                <span className="text-muted fs-6 ms-1"> 
                / {currencyFormatter.format(max)}</span>
                </div>
            </CardTitle>
            <Progress 
            className="rounded-pill" 
            color={getProgressBarVariant(amount, max)}
            min={0} 
            max={max} 
            value={amount}/>


        </CardBody>
    </Card>
  )
}

function getProgressBarVariant (amount, max) {
    const ratio = amount / max
    if (ratio < .5) return "success"
    if (ratio < .75) return "warning"
    return "danger"



}
