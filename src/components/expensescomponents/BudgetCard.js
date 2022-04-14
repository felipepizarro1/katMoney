import { Button, Container, Card, CardBody, CardTitle, Progress } from "reactstrap";
import { currencyFormatter } from "./utils";


export default function BudgetCard({ name, amount, max, gray, hideButtons, onAddExpenseClick }) {

  const classNames = []
  if (amount > max) {
    classNames.push("bg-danger","bg-opacity-10")
  }
  else if (gray) {
    classNames.push("bg-light")
  }
  return (
    <Card className={classNames.join(" ")}>
        <CardBody>
            <CardTitle className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                <div className="me-2">{name}</div>
                <div className="d-flex align-items-baseline">{currencyFormatter.format(amount)}
                {max && (<span className="text-muted fs-6 ms-1"> 
                / {currencyFormatter.format(max)}</span>)}
                </div>
            </CardTitle>
            {max && (<Progress 
            className="rounded-pill" 
            color={getProgressBarVariant(amount, max)}
            min={0} 
            max={max} 
            value={amount}
            />
            )}
            {!hideButtons && (<Container className="my-4">
            <div className="row">
                <div className="col">
                 <Button color="primary" className='m-1 ms-auto' onClick={onAddExpenseClick}>Add Expense</Button>
                 <Button outline color="secondary" className='m-1'>View Expenses</Button>
                 </div>
            </div>
        </Container>)}
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
