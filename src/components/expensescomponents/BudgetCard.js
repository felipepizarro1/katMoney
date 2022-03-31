import { Card, CardBody, CardTitle } from "reactstrap";

export default function BudgetCard({ name, amount }) {
  return (
    <Card>
        <CardBody>
            <CardTitle>
                <div>{name}</div>
                <div>{amount}</div>
            </CardTitle>
        </CardBody>
    </Card>
  )
}
