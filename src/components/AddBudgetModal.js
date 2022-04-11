import React, { Component } from 'react'
import { Modal, ModalHeader, Input, ModalBody, FormGroup, Label, Form, Button } from 'reactstrap'



class AddBudgetModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
      handleSubmit() {
          console.log("handleSubmit")
      }




 render () {
  return (
      <>
        <Button outline color='transparent' size="sm" onClick={this.toggle}>
          Click Here
        </Button>
        <Modal isOpen={this.state.modal} >
            <Form onSubmit={this.handleSubmit}>
                <ModalHeader toggle={this.toggle}>
                    New Budget
                </ModalHeader>
                <ModalBody>
                    <FormGroup className="mb-3" controlId="name">
                        <Label>Name</Label>
                        <Input type="text" required></Input>
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="max">
                        <Label>Maximum Spending</Label>
                        <Input type="number" required min={0} step={0.01} ></Input>
                    </FormGroup>
                    <div className="d-flex justify-content-end">
                        <Button color="primary" type="submit">Add</Button>
                    </div>
                </ModalBody>
            </Form>
        </Modal>
    </>
  )
}
}

export default AddBudgetModal;
 