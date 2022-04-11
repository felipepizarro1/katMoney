import React from 'react'
import { Modal, ModalHeader, Input, ModalBody, FormGroup, Label, Form, Button } from 'reactstrap'
import { useRef } from 'react'



export default function AddBudgetModal({ show, handleClose }) {

    function handleSubmit(e) {

    }
    const nameRef =  useRef()
    const maxRef = useRef()

  return (
    <Modal isOpen={show} onHide={handleClose} >
        <Form onSubmit={handleSubmit}>
            <ModalHeader closeButton>
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
  )
}
 